import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { userLoggedOut } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hook";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

export default function MainLayout() {
  //   const handleChange = (e: any) => {
  //     console.log(e.target.value);
  //   };
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(userLoggedOut());
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
       
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
