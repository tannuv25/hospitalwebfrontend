// import AuthForm from "../../components/AuthForm";

// const Login = () => {
//   const handleLogin = (data) => {
//     console.log("Login Data:", data);
//     // Here you'll call your backend API (Node/Express)
//   };

//   return <AuthForm type="login" onSubmit={handleLogin} />;
// };

// export default Login;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    console.log("➡️ Login attempt with:", formData);
    await login(formData);
  };

  useEffect(() => {
    if (user) {
      console.log("✅ Redirecting to home...");
      navigate("/");
    }
  }, [user, navigate]);

  return <AuthForm type="login" onSubmit={handleLogin} loading={loading} />;
};

export default LoginPage;
