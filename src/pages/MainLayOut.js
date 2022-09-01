import { Layout } from "antd";
import SideNavBar from "../components/SideNavBar";
import Headercom from "../components/Header";
import { Content } from "antd/lib/layout/layout";
import { Outlet } from "react-router-dom";

const MainLayOut = () => {
    return (
        <Layout>
            <SideNavBar />
            <Layout className="site-layout">
                <Headercom />
                <Content className="layout-main-content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )


}

export default MainLayOut