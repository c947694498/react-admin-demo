import { Layout } from "antd";
import UILayoutHeader from "./ULayout.Header";
import UILayoutContent from "./ULayout.Content";
import UILayoutSider from "./ULayout.Sider";
import UILayoutBreadcrumb from "./ULayout.Breadcrumb";
interface IProps {
  children: JSX.Element;
}

const ULayout = (props: IProps) => {
  return (
    <Layout>
      <UILayoutHeader></UILayoutHeader>
      <Layout>
        <UILayoutSider></UILayoutSider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <UILayoutBreadcrumb></UILayoutBreadcrumb>
          <UILayoutContent>{props.children}</UILayoutContent>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ULayout;
