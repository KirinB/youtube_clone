import { Link } from "react-router-dom";
import { GoogleLogoIcon } from "../../component/icon";
import "./RegisterPage.css";
import { useState } from "react";

function User(userName, userPassword) {
  this.userName = userName;
  this.userPassword = userPassword;
}

let listUser = JSON.parse(localStorage.getItem("user")) ?? [
  {
    userName: "Kirin@gmail.com",
    userPassword: "123",
  },
];

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassWord = (event) => {
    setPassWord(event.target.value);
  };

  const handleCLickBtn = () => {
    if (userName === "") {
      alert("Vui lòng nhập tài khoản!");
    } else {
      if (password === "") {
        alert("Vui lòng nhập mật khẩu!");
      } else {
        const getUser = new User(userName, password);
        listUser.push(getUser);
        localStorage.setItem("user", JSON.stringify(listUser));
        const nhan = localStorage.getItem("user");
        console.log(JSON.parse(nhan));
        alert("Đăng ký thành công!");
      }
    }
  };
  return (
    <div className="padding-top-loginpage">
      <div className="wapper-login-page container">
        <div className="background">
          <div className="title-login-page">
            <div className="logo-google">
              <GoogleLogoIcon />
            </div>
            <div className="title-login">
              <span>Đăng ký</span>
            </div>
            <div className="title-login2">
              <p>Tiếp tục tới YouTube</p>
            </div>
          </div>
          <div>
            <input
              value={userName}
              onChange={handleChangeUserName}
              className="input-id-loginpage"
              type="email"
              required
              placeholder="Email hoặc số điện thoại"
            ></input>
          </div>
          <div>
            <input
              value={password}
              onChange={handleChangePassWord}
              className="input-pass-loginpage"
              type="password"
              required
              placeholder="Mật khẩu"
            ></input>
          </div>
          <div className="label-login-page">
            <p>
              Đây không phải máy tính của bạn? Hãy sử dụng chế độ Khách để đăng
              nhập một cách riêng tư. <a href="/">Tìm hiểu thêm</a>
            </p>
          </div>
          <div className="register-login-page">
            <Link to="/login">Đã có tài khoản?</Link>
          </div>
          <div>
            <span className="btn-login-page" onClick={handleCLickBtn}>
              Đăng ký
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
