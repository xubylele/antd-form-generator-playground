import { AntdSchemaForm } from '@xubylele/antd-form-generator';
import { Card, Col, Row, Space } from 'antd';
import { JsonEditor } from 'json-edit-react';
import type { PreviewProps } from '../types';

export function Preview({
  schema,
  uiSchema,
  initialValues,
  submited,
  setSubmited,
}: PreviewProps) {

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Card title="Preview">
            {schema && uiSchema && (
              <AntdSchemaForm
                orientation='vertical'
                schema={schema}
                uiSchema={uiSchema}
                initialValues={initialValues}
                onFinish={(values) => setSubmited(values)}
              />
            )}
          </Card>
          <Card title="Submited Values">
            <JsonEditor
              data={submited}
              showStringQuotes
              rootName=""
              restrictAdd
              restrictDelete
              restrictEdit
              restrictDrag
              restrictTypeSelection
            />
          </Card>
        </Space>
      </Col>
    </Row>
  )
}