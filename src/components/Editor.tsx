import { Col, Row, Space, Typography } from 'antd';
import { JsonEditor } from 'json-edit-react';
import type { EditorProps } from '../types';


export function Editor({ label, value, onChange }: EditorProps) {
  const parsedValue = (() => {
    try {
      return JSON.parse(value);
    } catch {
      return {};
    }
  })();

  return (
    <Row>
      <Col span={24}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Typography.Title level={5} style={{ margin: 0 }}>{label}</Typography.Title>
          <div style={{
            height: '350px',
            overflow: 'auto',
            border: '1px solid #d9d9d9',
            borderRadius: '6px',
            padding: '8px'
          }}>
            <JsonEditor
              data={parsedValue}
              setData={(data) => onChange(JSON.stringify(data, null, 2))}
              showStringQuotes
              rootName=""
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
}