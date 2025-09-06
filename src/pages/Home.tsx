import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd';
import { useHome } from '../hooks/home/useHome';
import {
  FaRocket,
  FaPlay,
  FaUser,
  FaUserPlus,
  FaSignInAlt,
  FaShoppingCart,
  FaFileAlt,
  FaEnvelope,
  FaIdCard,
  FaQuestion,
  FaFlask,
  FaEdit,
  FaEye,
  FaList,
} from 'react-icons/fa';

const { Title, Paragraph, Text } = Typography;

export function Home() {
  const { features, examples, handleStartPlaying } = useHome();

  const getIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'user':
        return <FaUser />;
      case 'shopping-cart':
        return <FaShoppingCart />;
      case 'sign-in':
        return <FaSignInAlt />;
      case 'user-plus':
        return <FaUserPlus />;
      case 'id-card':
        return <FaIdCard />;
      case 'envelope':
        return <FaEnvelope />;
      case 'file-alt':
        return <FaFileAlt />;
      case 'edit':
        return <FaEdit />;
      case 'eye':
        return <FaEye />;
      case 'list':
        return <FaList />;
      case 'flask':
        return <FaFlask />;
      default:
        return <FaQuestion />;
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <Space direction="vertical" size={32} style={{ width: '100%' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={1} style={{ marginBottom: '16px' }}>
            antd-form-generator
            <Tag color="blue" style={{ marginLeft: '16px', fontSize: '16px', padding: '4px 12px' }}>
              Playground
            </Tag>
          </Title>
          <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
            A comprehensive playground for testing and experimenting with the{' '}
            <Text code>@xubylele/antd-form-generator</Text> library. Create dynamic forms
            using JSON schemas with real-time validation and form submission testing.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            onClick={handleStartPlaying}
            icon={<FaPlay />}
            style={{ height: '48px', fontSize: '16px', padding: '0 32px' }}
          >
            Start Playing
          </Button>
        </div>

        {/* Features Section */}
        <div>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
            Features
          </Title>
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  hoverable
                  style={{ height: '100%', textAlign: 'center' }}
                  bodyStyle={{ padding: '24px' }}
                >
                  <Space direction="vertical" size={16} style={{ width: '100%' }}>
                    <div style={{ fontSize: '32px', color: '#1890ff', marginBottom: '8px' }}>
                      {getIcon(feature.iconKey)}
                    </div>
                    <Title level={4} style={{ margin: 0 }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{ margin: 0, color: '#666' }}>
                      {feature.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Examples Section */}
        <div>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
            Available Examples
          </Title>
          <Row gutter={[16, 16]}>
            {examples.map((example, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <Card
                  size="small"
                  hoverable
                  style={{ height: '100%' }}
                  bodyStyle={{ padding: '16px' }}
                >
                  <Space direction="vertical" size={8} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ fontSize: '16px', color: '#1890ff' }}>
                        {getIcon(example.iconKey)}
                      </div>
                      <Text strong>{example.name}</Text>
                    </div>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {example.description}
                    </Text>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Quick Start Section */}
        <Card
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
          }}
          bodyStyle={{ padding: '40px' }}
        >
          <div style={{ textAlign: 'center' }}>
            <Title level={2} style={{ color: 'white', marginBottom: '16px' }}>
              Ready to Get Started?
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '16px', marginBottom: '32px' }}>
              Jump into the playground and start creating dynamic forms with JSON schemas.
              No setup required - everything works right in your browser!
            </Paragraph>
            <Button
              type="primary"
              size="large"
              onClick={handleStartPlaying}
              icon={<FaRocket />}
              style={{
                height: '48px',
                fontSize: '16px',
                padding: '0 32px',
                background: 'white',
                color: '#667eea',
                border: 'none',
              }}
            >
              Launch Playground
            </Button>
          </div>
        </Card>
      </Space>
    </div>
  );
}
