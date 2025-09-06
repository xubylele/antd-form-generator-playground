import type { FormSchema, UIFormSchema } from '@xubylele/antd-form-generator';

export interface EditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export interface PreviewProps {
  schema: FormSchema | null;
  uiSchema: UIFormSchema | null;
  initialValues?: Record<string, unknown>;
  submited: Record<string, unknown>;
  setSubmited: (values: Record<string, unknown>) => void;
}

export interface TopbarProps {
  examples: PlaygroundExample[];
  currentId: string;
  onChange: (id: string) => void;
  onReset: () => void;
}

export type PlaygroundExample = {
  id: string;
  title: string;
  schema: FormSchema | null;
  uiSchema: UIFormSchema | null;
  initialValues?: Record<string, unknown>;
};

export type UseAppProps = {
  setSubmited: (values: Record<string, unknown>) => void;
};