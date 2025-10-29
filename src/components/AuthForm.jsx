import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import Swal from "sweetalert2";

const AuthForm = ({ type, onSubmit }) => {
  const isLogin = type === "login";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the parent’s submit handler (login/signup)
      const response = await onSubmit(formData);

      // ✅ If API success
      Swal.fire({
        title: isLogin ? "Login Successful!" : "Signup Successful!",
        text: isLogin
          ? "Welcome back! You have logged in successfully."
          : "Your account has been created successfully!",
        icon: "success",
        confirmButtonColor: "#16a34a",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text:
          error?.message ||
          "Something went wrong. Please check your details and try again.",
        icon: "error",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-green-50 via-white to-green-100">
      <div className="backdrop-blur-lg bg-white/80 shadow-2xl border border-green-100 rounded-3xl w-[380px] p-8 transition-all duration-300 hover:shadow-green-200/70">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Your Account "}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-green-500" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full pl-10 p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-500" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full pl-10 p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-500" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full pl-10 p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-green-300/50 cursor-pointer"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600 text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-green-700 font-semibold hover:underline hover:text-green-800"
              >
                Sign Up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a
                href="/login"
                className="text-green-700 font-semibold hover:underline hover:text-green-800"
              >
                Login
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Lock, User, Stethoscope } from "lucide-react";

// const AuthForm = ({ type, onSubmit }) => {
//   const isLogin = type === "login";
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="backdrop-blur-lg bg-white/80 shadow-2xl border border-green-100 rounded-3xl w-[380px] p-8 transition-all duration-300 hover:shadow-green-200/70"
//       >
//         {/* Hospital Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="flex items-center gap-2">
//             <Stethoscope className="text-green-600" size={32} />
//             <span className="text-2xl font-bold text-green-700">MediCare+</span>
//           </div>
//         </div>

//         <motion.h2
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-3xl font-extrabold text-center text-green-700 mb-6"
//         >
//           {isLogin ? "Welcome Back 👋" : "Create Your Account 🏥"}
//         </motion.h2>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           {!isLogin && (
//             <>
//               <div className="relative">
//                 <User className="absolute left-3 top-3 text-green-500" size={20} />
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                   className="w-full pl-10 p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
//                 />
//               </div>

//               {/* Role Selection */}
//               <div className="relative">
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white text-gray-700"
//                 >
//                   <option value="user">Patient / User</option>
//                   <option value="doctor">Doctor</option>
//                 </select>
//               </div>
//             </>
//           )}

//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-green-500" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               onChange={handleChange}
//               className="w-full pl-10 p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-3 text-green-500" size={20} />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               className="w-full pl-10 p-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all"
//             />
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-green-300/50"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </motion.button>
//         </form>

//         <p className="text-center mt-5 text-gray-600 text-sm">
//           {isLogin ? (
//             <>
//               Don’t have an account?{" "}
//               <a
//                 href="/signup"
//                 className="text-green-700 font-semibold hover:underline hover:text-green-800"
//               >
//                 Sign Up
//               </a>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <a
//                 href="/login"
//                 className="text-green-700 font-semibold hover:underline hover:text-green-800"
//               >
//                 Login
//               </a>
//             </>
//           )}
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default AuthForm;
