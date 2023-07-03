import { useState } from "react";
import { GoogleLogoIcon } from "../../component/icon";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

let listUser = JSON.parse(localStorage.getItem("user")) ?? [
  {
    userName: "Kirin@gmail.com",
    userPassword: "123",
  },
];

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassWord = (event) => {
    setPassWord(event.target.value);
  };

  const handleCLickBtn = () => {
    const findUser = listUser.find((item) => {
      return item.userName === userName;
    });
    if (findUser === undefined) {
      alert("Sai thông tin đăng nhập !");
    } else {
      if (findUser.userPassword === password) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("login", JSON.stringify(true));
        return navigate("/");
      } else {
        alert("Sai mật khẩu");
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
              <span>Đăng nhập</span>
            </div>
            <div className="title-login2">
              <p>Tiếp tục tới YouTube</p>
            </div>
          </div>
          <div>
            <input
              value={userName}
              className="input-id-loginpage"
              type="email"
              onChange={handleChangeUserName}
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
            <Link to="/register">Tạo tài khoản</Link>
          </div>
          <div>
            <span className="btn-login-page" onClick={handleCLickBtn}>
              Đăng nhập
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
