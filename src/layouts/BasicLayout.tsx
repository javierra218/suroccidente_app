import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import '../styles/BasicLayout.css';
import Topbar from '../components/Topbar';
const { Footer, Content } = Layout;

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Layout className="layout">
      <Topbar />
      <Content className="content">{children}</Content>
      <Footer className="footer">© 2025 Mi Aplicación. Todos los derechos reservados.</Footer>
    </Layout>
  );
};

export default BasicLayout;
