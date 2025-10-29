// import AuthForm from "../../components/AuthForm";

// const Signup = () => {
//   const handleSignup = (data) => {
//     console.log("Signup Data:", data);
//     // Here you'll call your backend API (Node/Express)
//   };

//   return <AuthForm type="signup" onSubmit={handleSignup} />;
// };

// export default Signup;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authcontext";
import AuthForm from "../../components/AuthForm";

const SignupPage = () => {
  const { signup, loading, user } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    console.log("🟢 Signup Data:", formData);
    await signup(formData); // calls the signup API from AuthContext
  };

  useEffect(() => {
    if (user) {
      console.log("✅ Signup success — redirecting to login...");
      navigate("/login");
    }
  }, [user, navigate]);

  return <AuthForm type="signup" onSubmit={handleSignup} loading={loading} />;
};

export default SignupPage;
