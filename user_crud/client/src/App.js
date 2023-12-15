import axios from "axios";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "./slices/userSlice";

const waitForSec = async (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const userInfo = useSelector((state) => state.userInfo.value);
  const dispatch = useDispatch();

  const handleClickSubmit = async () => {
    //Integrity check
    if (username === "" || password === "")
      return alert("아이디나 비밀번호를 입력해주세요.");

    try {
      setDisabled(true); //disable btn

      //fetch
      const response = await axios.post("http://localhost:8000/user/login", {
        id: username,
        pw: password,
      });
      const { AccessToken, userId, username: name } = response.data.result;

      //Loading
      setLoading(true);
      await waitForSec(1.5);
      setLoading(false);

      console.log(loading);

      //Set User
      dispatch(login({ AccessToken, userId, username: name }));

      setUsername("");
      setPassword("");
    } catch (error) {
      //404, 400, 500
      alert("아이디나 비밀번호가 일치하지 않습니다.");
      console.log(error);
    } finally {
      setDisabled(false); //activate btn
    }
  };

  const doSomething = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/payload", {
        headers: {
          Authorization: userInfo.AccessToken,
        },
      });

      alert(response.data.message);
    } catch (error) {
      alert("유효하지 않은 인증방식입니다.");
      console.log(error);
      dispatch(logout());
    }
  };

  if (loading) return <div>loading</div>;
  if (!userInfo)
    return (
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={disabled}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={disabled}
        />
        <button onClick={handleClickSubmit} disabled={disabled}>
          submit
        </button>
      </div>
    );

  return (
    <div>
      <button onClick={doSomething}>Do something</button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default App;
