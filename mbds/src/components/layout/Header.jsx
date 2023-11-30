import React from "react";
import { Link } from "react-router-dom";

import styled from "../../styles/components/layout/Header.module.css"

export default function Header() {

  return (
  <nav className={styled.header__wrapper}>
    <div>
      <Link to="/">
        <img
          className={styled.header__image}
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
    </div>

    <div>
      <Link to='/movies' className={styled.header__link}> 영화 </Link>
      <Link to='/tv' className={styled.header__link}>TV 프로그램</Link>
      <Link to='/celebrity' className={styled.header__link}>인물</Link>
    </div>

    <div className={styled.header__login}>
      <Link to='/login'><button>로그인</button></Link>
      {/* <p>{isLogin ? "환영합니다!" : "로그인 해주세요!"}</p> */}
    </div>
  </nav>
  );
}
