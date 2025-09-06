import { Button, Select, Space, Typography } from 'antd';
import type { TopbarProps } from '../types';

export function Topbar({ examples, currentId, onChange, onReset }: TopbarProps) {
  return (
    <Space
      style={{
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 16
      }}
    >
      <Typography.Title level={4} style={{ margin: 0 }}>
        antd-form-generator — Playground
      </Typography.Title>
      <Space>
        <Select
          value={currentId}
          style={{ width: 200 }}
          options={examples.map(example => ({
            label: example.title,
            value: example.id
          }))}
          onChange={(value) => {
            onChange(value);
            onReset();
          }}
        />
        <Button type="primary" onClick={onReset}>Reset</Button>
      </Space>
    </Space>
  )
}
