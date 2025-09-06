import { ConfigProvider } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/Layout';
import { Home } from './pages/Home';
import { Playground } from './pages/Playground';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </AppLayout>
    </ConfigProvider>
  );
}