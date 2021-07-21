import { Layout } from "antd";

interface IProps {
  children: JSX.Element;
}

const UILayoutContent = (props: IProps) => {
  return (
    <Layout.Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {props.children}
    </Layout.Content>
  );
};

export default UILayoutContent;
