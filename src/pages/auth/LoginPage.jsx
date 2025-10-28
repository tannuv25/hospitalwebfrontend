import AuthForm from "../../components/AuthForm";

const Login = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
    // Here you'll call your backend API (Node/Express)
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;
