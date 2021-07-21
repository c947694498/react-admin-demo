import { useState } from "react";
import { Store } from "../../store/index";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const store = Store.useContainer();
  /**
   * 登陆
   */
  const onClickLogin = () => {
    store.user.setLoginAccount(account);
    store.user.setLoginPassword(password);
    store.user.setIsLogin(true);
  };
  return (
    <FormS>
      <h1>Login</h1>
      <Form.Item label="account">
        <Input
          type="text"
          value={account}
          onInput={(e) => setAccount(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item label="password">
        <Input
          type="text"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button block onClick={onClickLogin}>
          登陆
        </Button>
      </Form.Item>

      <div>{String(store.user.isLogin)}</div>
      <div>{store.user.loginAccount}</div>
      <div>{store.user.loginPassword}</div>
    </FormS>
  );
};

const FormS = styled(Form)`
  width: 500px;
  margin: 0 auto;
`;

export default Login;
