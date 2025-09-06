import { AntdSchemaForm } from '@xubylele/antd-form-generator';
import { Button, Card, Col, Row, Space } from 'antd';
import { JsonEditor } from 'json-edit-react';
import { useState } from 'react';
import type { PreviewProps } from '../types';

export function Preview({
  schema,
  uiSchema,
  initialValues,
  submited,
  setSubmited,
}: PreviewProps) {
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Card title="Preview">
            <Space direction="vertical" size={16}>
              <Button
                onClick={() => setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical')}
                type="default"
              >
                Change Orientation
              </Button>
              {schema && uiSchema && (
                <AntdSchemaForm
                  orientation={orientation || 'vertical'}
                  schema={schema}
                  uiSchema={uiSchema}
                  initialValues={initialValues}
                  onFinish={(values) => setSubmited(values)}
                  submitButtonProps={{
                    type: 'primary',
                    size: 'large',
                    title: 'Submit Form',
                  }}
                />
              )}
            </Space>
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