import React, { useEffect, useState } from "react";

export default function App() {
    useEffect(() => {
        const scriptId = "particles-js-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src =
                "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
            script.async = true;
            script.onload = () => {
                if (window.particlesJS) {
                    window.particlesJS("particles-js", {
                        particles: {
                            number: { value: 80, density: { enable: true, value_area: 800 } },
                            color: { value: "#ffffff" },
                            shape: {
                                type: "circle",
                                stroke: { width: 0, color: "#000000" },
                                polygon: { nb_sides:5 },
                            },
                            opacity: {
                                value: 0.5,
                                random: false,
                                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
                            },
                            size: {
                                value: 5,
                                random: true,
                                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1,
                            },
                            move: {
                                enable: true,
                                speed: 6,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                            },
                        },
                        interactivity: {
                            detect_on: "canvas",
                            events: {
                                onhover: { enable: true, mode: "repulse" },
                                onclick: { enable: true, mode: "push" },
                                resize: true,
                            },
                            modes: {
                                grab: { distance: 400, line_linked: { opacity: 1 } },
                                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                                repulse: { distance: 200 },
                                push: { particles_nb: 4 },
                                remove: { particles_nb: 2 },
                            },
                        },
                        retina_detect: true,
                    });
                }
            };
            document.body.appendChild(script);
        }
    }, []);

    const [form, setForm] = useState("login");
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [forgetEmail, setForgetEmail] = useState("");

    const switchForm = (formName) => {
        setMessage("");
        setError("");
        setForm(formName);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        const email = registerData.email.toLowerCase().trim();
        if (users.find((u) => u.email === email)) {
            setError("Email already registered.");
            return;
        }
        setUsers([...users, { ...registerData, email }]);
        setMessage("Account created successfully! You can login now.");
        setRegisterData({ name: "", email: "", password: "" });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        const email = loginData.email.toLowerCase().trim();
        const user = users.find(
            (u) => u.email === email && u.password === loginData.password
        );
        if (user) {
            setMessage(`Welcome back, ${user.name}!`);
            setError("");
        } else {
            setError("Invalid email or password.");
            setMessage("");
        }
    };

    const handleForget = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        const email = forgetEmail.toLowerCase().trim();
        const user = users.find((u) => u.email === email);
        if (user) {
            setMessage(`Reset link sent to ${email} (simulated).`);
            setError("");
        } else {
            setError("Email not found.");
            setMessage("");
        }
    };

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                overflow: "hidden",
                color: "white",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <div
                id="particles-js"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                    pointerEvents: "auto",
                }}
            />

            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 400,
                    margin: "auto",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(30,30,30,0.7)",
                    borderRadius: 12,
                    padding: 32,
                    boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                }}
            >
                <h2
                    style={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        marginBottom: 24,
                        fontWeight: "300",
                        fontSize: 28,
                    }}
                >
                    {form}
                </h2>

                {form === "login" && (
                    <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={loginData.email}
                            onChange={(e) =>
                                setLoginData({ ...loginData, email: e.target.value })
                            }
                            style={{
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                                backgroundColor: "#333",
                                color: "white",
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={loginData.password}
                            onChange={(e) =>
                                setLoginData({ ...loginData, password: e.target.value })
                            }
                            style={{
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                                backgroundColor: "#333",
                                color: "white",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: 12,
                                borderRadius: 6,
                                border: "none",
                                backgroundColor: "#ec4899",
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                        >
                            Login
                        </button>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: 14,
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => switchForm("register")}
                                style={{ background: "none", border: "none", color: "#f472b6", cursor: "pointer", padding: 0 }}
                            >
                                Create account
                            </button>
                            <button
                                type="button"
                                onClick={() => switchForm("forget")}
                                style={{ background: "none", border: "none", color: "#f472b6", cursor: "pointer", padding: 0 }}
                            >
                                Forgot password?
                            </button>
                        </div>
                    </form>
                )}

                {form === "register" && (
                    <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            value={registerData.name}
                            onChange={(e) =>
                                setRegisterData({ ...registerData, name: e.target.value })
                            }
                            style={{
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                                backgroundColor: "#333",
                                color: "white",
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={registerData.email}
                            onChange={(e) =>
                                setRegisterData({ ...registerData, email: e.target.value })
                            }
                            style={{
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                                backgroundColor: "#333",
                                color: "white",
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={registerData.password}
                            onChange={(e) =>
                                setRegisterData({ ...registerData, password: e.target.value })
                            }
                            style={{
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                                backgroundColor: "#333",
                                color: "white",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: 12,
                                borderRadius: 6,
                                border: "none",
                                backgroundColor: "#ec4899",
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                        >
                            Register
                        </button>
                        <p style={{ fontSize: 14, textAlign: "center" }}>
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => switchForm("login")}
                                style={{ background: "none", border: "none", color: "#f472b6", cursor: "pointer", padding: 0 }}
                            >
                                Login
                            </button>
                        </p>
                    </form>
                )}

                {form === "forget" && (
                    <form onSubmit={handleForget} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={forgetEmail}
                            onChange={(e) => setForgetEmail(e.target.value)}
                            style={{
                                padding: "10px 12px",
                                borderRadius: 6,
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                                backgroundColor: "#333",
                                color: "white",
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: 12,
                                borderRadius: 6,
                                border: "none",
                                backgroundColor: "#ec4899",
                                color: "white",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: 16,
                            }}
                        >
                            Send Reset Link
                        </button>
                        <p style={{ fontSize: 14, textAlign: "center" }}>
                            Remembered your password?{" "}
                            <button
                                type="button"
                                onClick={() => switchForm("login")}
                                style={{ background: "none", border: "none", color: "#f472b6", cursor: "pointer", padding: 0 }}
                            >
                                Login
                            </button>
                        </p>
                    </form>
                )}

                {message && (
                    <p
                        style={{
                            marginTop: 16,
                            color: "#34d399",
                            fontWeight: "600",
                            textAlign: "center",
                        }}
                    >
                        {message}
                    </p>
                )}
                {error && (
                    <p
                        style={{
                            marginTop: 16,
                            color: "#f87171",
                            fontWeight: "600",
                            textAlign: "center",
                        }}
                    >
                        {error}
                    </p>
                )}
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-red-400 opacity-30 animate-floatX"></div>

                <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-blue-400 opacity-30 animate-floatY"></div>

                <div className="absolute bottom-[15%] left-[20%] w-16 h-16 rounded-full bg-yellow-400 opacity-30 animate-floatXY"></div>

                <div className="absolute top-[50%] left-[50%] w-32 h-32 rounded-full bg-green-400 opacity-30 animate-floatXY"></div>
                <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full bg-red-400 opacity-30 animate-floatX"></div>

                <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-blue-400 opacity-30 animate-floatY"></div>

                <div className="absolute bottom-[15%] left-[20%] w-16 h-16 rounded-full bg-yellow-400 opacity-30 animate-floatXY"></div>

                <div className="absolute top-[50%] left-[50%] w-32 h-32 rounded-full bg-green-400 opacity-30 animate-floatXY"></div>

            </div>
            <div className="">
                <img src="/" alt="" />
            </div>
        </div>
    );
}







// import React, { useState } from 'react';
// import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const variants = {
//   left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
//   right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
//   fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } },
// };

// export default function GetInTouch() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ name: '', number: '', email: '', city: '', message: '' });
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [authMode, setAuthMode] = useState('register'); // register | login | forgot
//   const [authData, setAuthData] = useState({ email: '', password: '' });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleAuthChange = (e) => setAuthData({ ...authData, [e.target.name]: e.target.value });

//   // Contact Form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const savedCustomers = JSON.parse(localStorage.getItem('registeredCustomers')) || [];
//     const newCustomer = {
//       id: savedCustomers.length > 0 ? Math.max(...savedCustomers.map(c => c.id)) + 1 : 1,
//       name: formData.name,
//       mobile: formData.number,
//       email: formData.email,
//       city: formData.city || 'Unknown',
//       blocked: false,
//     };
//     localStorage.setItem('registeredCustomers', JSON.stringify([...savedCustomers, newCustomer]));
//     setFormData({ name: '', number: '', email: '', city: '', message: '' });
//     alert('Customer registered successfully!');
//   };

//   // Register a new user
//   const handleRegister = () => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     if (users.find(u => u.email === authData.email)) return alert('User already exists');
//     const newUser = {
//       email: authData.email,
//       password: authData.password,
//       registeredAt: new Date().toISOString(),
//     };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users)); // Save all users
//     alert('Registered successfully!');
//     setAuthData({ email: '', password: '' });
//   };

//   // Login user
//   const handleLogin = () => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(u => u.email === authData.email && u.password === authData.password);
//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user)); // Save current logged-in user
//       alert('Login successful!');
//       setPopupOpen(false);
//       setAuthData({ email: '', password: '' });
//       navigate('/'); // Redirect to home page
//       return;
//     }
//     alert('Invalid email or password');
//   };

//   // Forgot password
//   const handleForgotPassword = () => {
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(u => u.email === authData.email);
//     if (user) return alert(`Your password is: ${user.password}`);
//     alert('Email not found');
//   };

//   const handleSocialLogin = (provider) => {
//     // Simulated social login
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const socialUser = { email: `${provider}_user@example.com`, password: 'sociallogin', registeredAt: new Date().toISOString(), provider };
//     users.push(socialUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     localStorage.setItem('currentUser', JSON.stringify(socialUser));
//     alert(`${provider} login successful!`);
//     setPopupOpen(false);
//     navigate('/');
//   };

//   return (
//     <div className="pt-24 pb-8">
//       <div className="p-12 flex items-center justify-center bg-gray-100">
//         <motion.div className="flex w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg flex-col lg:flex-row"
//           initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
          
//           {/* Left Form */}
//           <motion.div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-10 lg:mb-0" variants={variants.left}>
//             <h2 className="text-2xl text-center text-pink-700 mb-6 font-bold">Contact Us</h2>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <motion.div variants={variants.fadeIn}>
//                 <label>Name</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Full Name" required />
//               </motion.div>
//               <motion.div variants={variants.fadeIn}>
//                 <label>Mobile</label>
//                 <input type="tel" name="number" value={formData.number} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Mobile Number" required />
//               </motion.div>
//               <motion.div variants={variants.fadeIn}>
//                 <label>Email</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Email" required />
//               </motion.div>
//               <motion.div variants={variants.fadeIn}>
//                 <label>City</label>
//                 <input type="text" name="city" value={formData.city} onChange={handleChange} className="border p-2 rounded w-full" placeholder="City" />
//               </motion.div>
//               <motion.div variants={variants.fadeIn}>
//                 <label>Message</label>
//                 <textarea name="message" value={formData.message} onChange={handleChange} className="border p-2 rounded w-full" placeholder="Message" />
//               </motion.div>
//               <motion.div variants={variants.fadeIn}>
//                 <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Submit</button>
//               </motion.div>
//             </form>

//             {/* Buttons to open popup */}
//             <div className="flex justify-center mt-6 space-x-4">
//               <button onClick={() => { setAuthMode('register'); setPopupOpen(true); }} className="bg-pink-500 text-white px-4 py-2 rounded">Register</button>
//               <button onClick={() => { setAuthMode('login'); setPopupOpen(true); }} className="bg-pink-500 text-white px-4 py-2 rounded">Login</button>
//               <button onClick={() => { setAuthMode('forgot'); setPopupOpen(true); }} className="bg-pink-500 text-white px-4 py-2 rounded">Forgot Password</button>
//             </div>
//           </motion.div>

//           {/* Right Info */}
//           <motion.div className="hidden lg:block w-full lg:w-1/2 pl-0 lg:pl-4" variants={variants.right}>
//             <h1 className="text-2xl font-semibold text-pink-500 text-center">Get in Touch</h1>
//             <p className="mt-4">Connect with us for adventures and tours guidance. Fill out the form, and our team will assist you promptly.</p>
//             <div className="mt-6"><FaPhoneAlt className="inline text-pink-500 mr-2" /> +91 800067579</div>
//             <div className="mt-2"><FaMailBulk className="inline text-pink-500 mr-2" /> info@pinkcityadventures.com</div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Popup */}
//       {popupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-96 relative">
//             <button onClick={() => setPopupOpen(false)} className="absolute top-2 right-2 text-gray-500">X</button>
//             <h2 className="text-xl font-bold mb-4 text-center">{authMode === 'register' ? 'Register' : authMode === 'login' ? 'Login' : 'Forgot Password'}</h2>

//             <div className="space-y-4">
//               {(authMode === 'register' || authMode === 'login') && (
//                 <>
//                   <input type="email" name="email" placeholder="Email" value={authData.email} onChange={handleAuthChange} className="border p-2 rounded w-full" />
//                   <input type="password" name="password" placeholder="Password" value={authData.password} onChange={handleAuthChange} className="border p-2 rounded w-full" />
//                 </>
//               )}
//               {authMode === 'forgot' && <input type="email" name="email" placeholder="Email" value={authData.email} onChange={handleAuthChange} className="border p-2 rounded w-full" />}

//               <button
//                 onClick={() => { authMode === 'register' ? handleRegister() : authMode === 'login' ? handleLogin() : handleForgotPassword(); }}
//                 className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
//               >
//                 {authMode === 'register' ? 'Register' : authMode === 'login' ? 'Login' : 'Retrieve Password'}
//               </button>

//               <div className="flex justify-between mt-4">
//                 <button onClick={() => handleSocialLogin('Google')} className="bg-red-500 text-white p-2 rounded w-full mr-2 hover:bg-red-600">Login with Google</button>
//                 <button onClick={() => handleSocialLogin('Apple')} className="bg-gray-800 text-white p-2 rounded w-full ml-2 hover:bg-black">Login with Apple</button>
//               </div>

//               <div className="flex justify-center mt-2 space-x-2">
//                 {authMode !== 'register' && <button onClick={() => setAuthMode('register')} className="text-blue-500">Register</button>}
//                 {authMode !== 'login' && <button onClick={() => setAuthMode('login')} className="text-blue-500">Login</button>}
//                 {authMode !== 'forgot' && <button onClick={() => setAuthMode('forgot')} className="text-blue-500">Forgot Password</button>}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
