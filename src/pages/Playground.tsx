import { Col, Row, Space } from 'antd';
import { Editor } from '../components/Editor';
import { Preview } from '../components/Preview';
import { Topbar } from '../components/Topbar';
import { EXAMPLES } from '../example';
import { usePlayground } from '../hooks/playground/usePlayground';
import { useSubmited } from '../hooks/preview/useSubmited';

export function Playground() {
  const { submited, setSubmited } = useSubmited();
  const {
    current,
    onChange,
    onReset,
    schemaText,
    setSchemaText,
    uiSchemaText,
    setUiSchemaText,
    initialValues,
    canPreview,
    parsedSchema,
    parsedUiSchema,
    errorMessage,
  } = usePlayground({ setSubmited });

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={24}>
        <Col span={24}>
          <Topbar
            examples={EXAMPLES}
            currentId={current}
            onChange={onChange}
            onReset={onReset}
          />
        </Col>
        <Col xs={24} lg={12}>
          <Space direction="vertical" size={16} style={{ width: '100%' }}>
            <Editor
              label="Schema"
              value={schemaText}
              onChange={setSchemaText}
            />
            <Editor
              label="UI Schema"
              value={uiSchemaText}
              onChange={setUiSchemaText}
            />
          </Space>
        </Col>
        <Col xs={24} lg={12}>
          {canPreview ? (
            <Preview
              schema={parsedSchema!}
              uiSchema={parsedUiSchema!}
              initialValues={initialValues}
              submited={submited}
              setSubmited={setSubmited}
            />
          ) : (
            <div style={{
              padding: '40px',
              textAlign: 'center',
              color: '#666',
              background: '#fafafa',
              borderRadius: '6px',
              border: '1px dashed #d9d9d9'
            }}>
              {errorMessage || 'Fix JSON errors to preview the form.'}
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};
