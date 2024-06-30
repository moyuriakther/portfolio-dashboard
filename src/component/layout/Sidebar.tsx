import { Layout, Menu } from "antd";
import { portfolioPaths } from "../../routes/portfolio.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";

const { Sider } = Layout;

// const userRole = {
//   USER: "admin",
// };

export default function Sidebar() {
  const sidebarItems = sidebarItemsGenerator(portfolioPaths);
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={() => {
        // console.log(broken);
      }}
      onCollapse={() => {
        // console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>M.Akther</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
}
