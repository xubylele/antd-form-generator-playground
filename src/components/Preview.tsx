import { AntdSchemaForm } from '@xubylele/antd-form-generator';
import { Button, Card, Col, Row, Space } from 'antd';
import { JsonEditor } from 'json-edit-react';
import { useState } from 'react';
import { FaCheckCircle, FaDatabase, FaEye } from 'react-icons/fa';
import { FaRotate } from 'react-icons/fa6';
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
          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaEye style={{ fontSize: '16px', color: '#1890ff' }} />
                Preview
              </div>
            }
          >
            <Space direction="vertical" size={16}>
              <Button
                onClick={() => setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical')}
                type="default"
                icon={<FaRotate />}
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
                    icon: <FaCheckCircle />,
                  }}
                />
              )}
            </Space>
          </Card>
          <Card
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaDatabase style={{ fontSize: '16px', color: '#1890ff' }} />
                Submited Values
              </div>
            }
          >
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