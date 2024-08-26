import React, { useState } from 'react';

function Login() {
  const [logindata, setLoginData] = useState({ email: "", password: "" });

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...logindata,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log(logindata);
    const checkdata = JSON.parse(localStorage.getItem("user"));
    console.log(checkdata);

    if (logindata.password !== checkdata.password || logindata.email !== checkdata.email) {
      alert("Invalid Email or Password");
    } else {
      alert("Login Successful");

      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <div>
        <h3>Login</h3>
        <input type="text" name="email" onChange={onchangeHandler} placeholder="Enter Email" />
        <input type="password" name="password" onChange={onchangeHandler} placeholder="Enter Password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default Login;
