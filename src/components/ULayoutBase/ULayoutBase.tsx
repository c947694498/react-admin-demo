import { Layout } from "antd";
import { memo } from "react";

const { Header, Content, Footer } = Layout;

interface IProps {
  children: JSX.Element;
}

const ULayoutBase = memo((props: IProps) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        React Admin Demo ©2021 Created by CBingBing
      </Footer>
    </Layout>
  );
});

export default ULayoutBase;
