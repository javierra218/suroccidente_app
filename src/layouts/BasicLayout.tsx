import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import '../styles/BasicLayout.css';
const { Header, Footer, Content } = Layout;

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Layout className="layout">
      <Header className="topbar" style={{ backgroundColor: '#001529', color: '#fff', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>Mi Aplicación</h1>
      </Header>
      <Content className="content" style={{ margin: '20px', padding: '20px', background: '#fff' }}>
        {children}
      </Content>
      <Footer className="footer" style={{ textAlign: 'center' }}>
        © 2025 Mi Aplicación. Todos los derechos reservados.
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
