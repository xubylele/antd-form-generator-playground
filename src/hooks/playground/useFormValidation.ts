import { useMemo, useCallback } from 'react';
import type { FormSchema, UIFormSchema } from '@xubylele/antd-form-generator';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  parsedSchema: FormSchema | null;
  parsedUiSchema: UIFormSchema | null;
}

export function useFormValidation(schemaText: string, uiSchemaText: string) {
  const validationResult = useMemo((): ValidationResult => {
    const errors: string[] = [];
    let parsedSchema: FormSchema | null = null;
    let parsedUiSchema: UIFormSchema | null = null;

    // Validate schema
    if (schemaText.trim()) {
      try {
        parsedSchema = JSON.parse(schemaText);
      } catch (error) {
        errors.push('Invalid JSON in Schema');
      }
    } else {
      errors.push('Schema is required');
    }

    // Validate UI schema
    if (uiSchemaText.trim()) {
      try {
        parsedUiSchema = JSON.parse(uiSchemaText);
      } catch (error) {
        errors.push('Invalid JSON in UI Schema');
      }
    } else {
      errors.push('UI Schema is required');
    }

    return {
      isValid: errors.length === 0,
      errors,
      parsedSchema,
      parsedUiSchema,
    };
  }, [schemaText, uiSchemaText]);

  const canPreview = useCallback(() => {
    return validationResult.isValid && validationResult.parsedSchema && validationResult.parsedUiSchema;
  }, [validationResult]);

  const getErrorMessage = useCallback(() => {
    if (validationResult.errors.length === 0) return null;
    return validationResult.errors.join(', ');
  }, [validationResult.errors]);

  return {
    ...validationResult,
    canPreview,
    getErrorMessage,
  };
}
