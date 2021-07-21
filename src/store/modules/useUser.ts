import { useState } from "react";
const useUser = () => {
  const [loginAccount, setLoginAccount] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  return {
    loginAccount,
    setLoginAccount,

    loginPassword,
    setLoginPassword,

    isLogin,
    setIsLogin,
  };
};

export default useUser;
