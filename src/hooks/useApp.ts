import { useEffect, useMemo, useState } from 'react';
import { EXAMPLES } from '../example';
import type { UseAppProps } from '../types';

export function useApp({ setSubmited }: UseAppProps) {
  const [current, setCurrent] = useState(EXAMPLES[0].id);

  const base = useMemo(() => EXAMPLES.find((example) => example.id === current)!, [current]);
  const [schemaText, setSchemaText] = useState('');
  const [uiSchemaText, setUiSchemaText] = useState('');

  useEffect(() => {
    if (base) {
      setSchemaText(JSON.stringify(base.schema, null, 2));
      setUiSchemaText(JSON.stringify(base.uiSchema, null, 2));
    }
  }, [base]);

  const onReset = () => {
    setSchemaText(JSON.stringify(base?.schema, null, 2));
    setUiSchemaText(JSON.stringify(base?.uiSchema, null, 2));
    setSubmited({});
  }

  const onChange = (id: string) => {
    setCurrent(id);
    const next = EXAMPLES.find(example => example.id === id);
    if (next) {
      setSchemaText(JSON.stringify(next.schema, null, 2));
      setUiSchemaText(JSON.stringify(next.uiSchema, null, 2));
    }
  }

  const initialValues = useMemo(() => base?.initialValues, [base]);

  return {
    base,
    current,
    onChange,
    schemaText,
    setSchemaText,
    uiSchemaText,
    setUiSchemaText,
    onReset,
    initialValues,
  }
}