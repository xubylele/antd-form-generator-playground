import { useEffect } from 'react';
import type { UsePlaygroundProps } from '../../types';
import { usePlaygroundState } from './usePlaygroundState';
import { useFormValidation } from './useFormValidation';

export function usePlayground({ setSubmited }: UsePlaygroundProps) {
  const {
    currentExampleId,
    currentExample,
    schemaText,
    uiSchemaText,
    initialValues,
    changeExample,
    resetToCurrentExample,
    updateSchemaText,
    updateUiSchemaText,
  } = usePlaygroundState();

  const {
    isValid,
    parsedSchema,
    parsedUiSchema,
    canPreview,
    getErrorMessage,
  } = useFormValidation(schemaText, uiSchemaText);

  // Initialize with first example
  useEffect(() => {
    if (currentExample) {
      updateSchemaText(JSON.stringify(currentExample.schema, null, 2));
      updateUiSchemaText(JSON.stringify(currentExample.uiSchema, null, 2));
    }
  }, [currentExample, updateSchemaText, updateUiSchemaText]);

  const onReset = () => {
    resetToCurrentExample();
    setSubmited({});
  };

  const onChange = (id: string) => {
    changeExample(id);
  };

  return {
    current: currentExampleId,
    onChange,
    schemaText,
    setSchemaText: updateSchemaText,
    uiSchemaText,
    setUiSchemaText: updateUiSchemaText,
    onReset,
    initialValues,
    // Validation state
    isValid,
    parsedSchema,
    parsedUiSchema,
    canPreview: canPreview(),
    errorMessage: getErrorMessage(),
  };
}