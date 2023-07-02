import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {

   const [inputs, setInputs] = useState({
     username: "",
     email: "",
     password: "",
   });

     const handleChange = (e) => {
       setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
     };

     console.log(inputs)

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          require
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button>Register</button>
        <span>
          Do you have an account? <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
