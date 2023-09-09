import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Cards} from "./components/cards/cards";
import Game from "./components/game";
import Handwriting from "./components/handwriting";

const {Header, Content, Footer} = Layout;

function TasksList() {
    return null;
}

const App = () => {
    const [activeComponent, setActiveComponent] = useState("Cards");

    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Layout className="layout">
          <Header
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
          >
            <div className="demo-logo" />

              <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['Task List']}
                  onSelect={({ key }) => setActiveComponent(key)}
              >
                  <Menu.Item key="Task List">TaskList</Menu.Item>
                  <Menu.Item key="Find the Diamond">Find the Diamond</Menu.Item>
                  <Menu.Item key="Handwriting">Handwriting</Menu.Item>
            </Menu>

          </Header>
          <Content
              style={{
                padding: '0 50px',
              }}
          >
            <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
            >
              <Breadcrumb.Item> </Breadcrumb.Item>
              {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
              {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
            </Breadcrumb>
            <div
                className="site-layout-content"
                style={{
                  minHeight: '100vh',
                  background: colorBgContainer,
                  padding: 24,
                }}
            >
                {activeComponent === "Task List" && <Cards />}
                {activeComponent === "Find the Diamond" && <Game />}
                {activeComponent === "Handwriting" && <Handwriting />}
            </div>
          </Content>
          <Footer
              style={{
                textAlign: 'center',
              }}
          >
            DevMinds ©2023 Created by DevMinds

          </Footer>
        </Layout>


    );
};
export default App;