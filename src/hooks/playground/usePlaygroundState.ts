import { useCallback, useMemo, useState } from 'react';
import { EXAMPLES } from '../../example';

export function usePlaygroundState() {
  const [currentExampleId, setCurrentExampleId] = useState(EXAMPLES[0].id);
  const [schemaText, setSchemaText] = useState('');
  const [uiSchemaText, setUiSchemaText] = useState('');

  const currentExample = useMemo(() =>
    EXAMPLES.find(example => example.id === currentExampleId)!,
    [currentExampleId]
  );

  const initialValues = useMemo(() => currentExample?.initialValues, [currentExample]);

  const changeExample = useCallback((id: string) => {
    setCurrentExampleId(id);
    const example = EXAMPLES.find(ex => ex.id === id);
    if (example) {
      setSchemaText(JSON.stringify(example.schema, null, 2));
      setUiSchemaText(JSON.stringify(example.uiSchema, null, 2));
    }
  }, []);

  const resetToCurrentExample = useCallback(() => {
    setSchemaText(JSON.stringify(currentExample?.schema, null, 2));
    setUiSchemaText(JSON.stringify(currentExample?.uiSchema, null, 2));
  }, [currentExample]);

  const updateSchemaText = useCallback((text: string) => {
    setSchemaText(text);
  }, []);

  const updateUiSchemaText = useCallback((text: string) => {
    setUiSchemaText(text);
  }, []);

  return {
    currentExampleId,
    currentExample,
    schemaText,
    uiSchemaText,
    initialValues,
    changeExample,
    resetToCurrentExample,
    updateSchemaText,
    updateUiSchemaText,
  };
}
