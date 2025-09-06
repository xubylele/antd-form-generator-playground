import { Button, Layout, Menu, Space, Typography, type MenuProps } from 'antd';
import { FaGithub, FaHome, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigation } from '../hooks/layout/useNavigation';
import type { AppLayoutProps } from '../types';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export function AppLayout({ children }: AppLayoutProps) {
  const { menuItems, handleMenuClick, currentPath } = useNavigation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Space align="center">
          <Title level={4} style={{ margin: 0, color: '#1890ff' }}>
            <Link to="/">antd-form-generator</Link>
          </Title>
        </Space>

        <Menu
          mode="horizontal"
          items={menuItems.map(item => ({
            ...item,
            icon: item.key === '/' ? <FaHome /> : <FaPlay />
          })) as MenuProps['items']}
          onClick={handleMenuClick}
          selectedKeys={[currentPath]}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: 'center',
            border: 'none',
            background: 'transparent',
          }}
        />

        <Space>
          <Button
            type="text"
            href="https://github.com/xubylele/antd-form-generator"
            target="_blank"
            rel="noopener noreferrer"
            icon={<FaGithub />}
          >
            GitHub
          </Button>
        </Space>
      </Header>

      <Content
        style={{
          padding: '24px',
          background: '#f5f5f5',
          minHeight: 'calc(100vh - 64px - 70px)',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          {children}
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          background: '#fff',
          borderTop: '1px solid #f0f0f0',
          padding: '16px 24px',
        }}
      >
        <Text type="secondary">
          antd-form-generator-playground © 2024 - Built with React, TypeScript & Ant Design
        </Text>
      </Footer>
    </Layout>
  );
}
