import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/auth/login", formData);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      console.log("✅ Logged in successfully:", res.data);
    } catch (error) {
      console.error("❌ Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/auth/signup", formData);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      console.log("✅ Signed up successfully:", res.data);
    } catch (error) {
      console.error("❌ Signup failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
  try {
    await fetch("http://localhost:8000/auth/logout", { method: "POST" });
  } catch (err) {
    console.error("Logout error:", err);
  }
  localStorage.removeItem("token");
  setUser(null);
};


  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
