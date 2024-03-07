import React from "react";
import { useNavigate } from "react-router-dom";
import '../Sass/MainLogin.scss';
import careerLogo from "../assets/careerLogo.png";

export default function LoginMain() {
  let navigate = useNavigate();
  return (
    <div className="Container">
      <div className="Nav">
        <a href="/">
          <img src={careerLogo} onClick={()=>navigate('/')} className="serviceLogo" />
        </a>
        <div>
          <span className="Join" onClick={() => navigate("/register")}>
            Join now
          </span>
          <span className="SignIn" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </div>
      </div>
      <div className="material">
        <div className="Hero">
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </div>
        <div className="Form">
          <div className="Google">
            <img  src="/images/google.svg" alt="" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
}
