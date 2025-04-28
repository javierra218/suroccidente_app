import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const Topbar: React.FC = () => {
  return (
    <Header style={{ backgroundColor: '#488704', color: '#fff', textAlign: 'center', padding: '0 20px' }}>
      <h1 style={{ color: '#fff', margin: 0 }}>Mi Aplicación</h1>
    </Header>
  );
};

export default Topbar;
