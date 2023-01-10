import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Dashboard2() {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Dashboard2
