import AuthForm from "../../components/AuthForm";

const Signup = () => {
  const handleSignup = (data) => {
    console.log("Signup Data:", data);
    // Here you'll call your backend API (Node/Express)
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
};

export default Signup;
