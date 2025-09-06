import { Button, Select, Space, Typography } from 'antd';
import type { TopbarProps } from '../types';
import { FaPlay, FaUndo } from 'react-icons/fa';

export function Topbar({ examples, currentId, onChange, onReset }: TopbarProps) {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: '16px 24px',
        borderRadius: '6px',
        border: '1px solid #f0f0f0',
        marginBottom: '24px',
      }}
    >
      <Space
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaPlay style={{ fontSize: '16px', color: '#1890ff' }} />
          <Typography.Title level={5} style={{ margin: 0, color: '#1890ff' }}>
            Form Generator Playground
          </Typography.Title>
        </div>
        <Space wrap>
          <Select
            value={currentId}
            style={{ width: 200, minWidth: 150 }}
            options={examples.map(example => ({
              label: example.title,
              value: example.id
            }))}
            onChange={(value) => {
              onChange(value);
              onReset();
            }}
            placeholder="Select example"
          />
          <Button type="primary" onClick={onReset} icon={<FaUndo />}>
            Reset
          </Button>
        </Space>
      </Space>
    </div>
  )
}
