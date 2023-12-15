import React, { useState } from 'react'

import styled from "../styles/page/Login.module.css"

export default function Login() {
    const [loginForm, setLoginForm] = useState({ email: "", password: ""});
    const [isBlured, setIsBlured] = useState({email: false, password:false});

    const isValidForm = {
      email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(loginForm.email),
      password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(loginForm.password),
    }

    const handleClickSubmitBtn = (e) => {
      e.stopPropagation();
      e.preventDefault();
      console.log(loginForm);
    }

  return (
    <div className={styled.wrapper}>
        <h1>이메일과 비밀번호를<br/>입력해주세요</h1>
        <form className={styled.login_form}>
            <label>이메일 주소</label>

            <input type='email' value={loginForm.email} 
            placeholder='example@example.com'
            onChange={(e) => {
              setLoginForm({...loginForm, email: e.target.value});
            }} onBlur={()=> setIsBlured({...isBlured, email:true})}/>

            { (isBlured.email && !isValidForm.email) && <p>올바른 이메일을 입력해주세요.</p>}

            <label>비밀번호</label>

            <input type='password' value={loginForm.password} 
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            onChange={(e) => {
              setLoginForm({...loginForm, password: e.target.value});
            }} onBlur={()=> setIsBlured({...isBlured, password:true})}/>
            
            {(isBlured.password && !isValidForm.password) && <p>올바른 비밀번호를 입력해주세요.</p>}

            <button className={styled.submit_btn} onClick={handleClickSubmitBtn} disabled={!isValidForm.email || !isValidForm.password}>확인</button>
        </form>
    </div>
  )
}
