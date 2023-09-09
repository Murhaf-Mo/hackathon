import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Cards} from "./components/cards/cards";
import Game from "./components/game";
import Handwriting from "./components/handwriting";
import MenuItem from "antd/es/menu/MenuItem";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import AboutMe from "./components/journal/aboutme";
import JournalApp from "./components/journal/journalapp";
import StudyApp from "./components/study/studyapp";

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
                  <MenuItem key="Task List">TaskList</MenuItem>
                  <MenuItem key="Find the Diamond">Find the Diamond</MenuItem>
                  <MenuItem key="Handwriting">Handwriting</MenuItem>
                  <MenuItem key="Journal App">Journal App</MenuItem>
                  <MenuItem key={"Study App"}>Study App</MenuItem>
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
              <BreadcrumbItem> </BreadcrumbItem>
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
                {activeComponent === "Journal App" && <JournalApp />}
                {activeComponent === "Study App" && <StudyApp />}
            </div>
          </Content>
          <Footer
              style={{
                textAlign: 'center',
              }}
          >
            DevMinds Projects ©2023 Created by DevMinds

          </Footer>
        </Layout>


    );
};
export default App;