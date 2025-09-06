import type { FormSchema, UIFormSchema } from '@xubylele/antd-form-generator';
import { Col, ConfigProvider, Layout, Row, Space } from 'antd';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { Topbar } from './components/Topbar';
import { EXAMPLES } from './example';
import { useApp } from './hooks/useApp';
import { useSubmited } from './hooks/preview/useSubmited';

const { Header, Content } = Layout;

export default function App() {
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
  } = useApp({ setSubmited });

  return (
    <ConfigProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: "transparent", padding: 16 }}>
          <Topbar
            examples={EXAMPLES}
            currentId={current}
            onChange={onChange}
            onReset={onReset}
          />
        </Header>
        <Content style={{ padding: 16 }}>
          <Row gutter={16}>
            <Col span={12} style={{ width: '100%' }}>
              <Space direction="vertical" size={16}>
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
            <Col span={12} style={{ width: '100%' }}>
              {schemaText && uiSchemaText ? (
                <Preview
                  schema={JSON.parse(schemaText) as FormSchema}
                  uiSchema={JSON.parse(uiSchemaText) as UIFormSchema}
                  initialValues={initialValues}
                  submited={submited}
                  setSubmited={setSubmited}
                />
              ) : (
                <div>Fix JSON errors to preview the form.</div>
              )}
            </Col>
          </Row>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}