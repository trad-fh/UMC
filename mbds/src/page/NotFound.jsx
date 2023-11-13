import { Link } from "react-router-dom";

import styled from "../styles/page/NotFound.module.css"

function NotFound () {
    return <div className={styled.wrapper}>
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <h3>주소가 잘못되었거나 더이상 제공되지 않는 페이지입니다.</h3>
        <Link to="/">메인 페이지로 이동</Link>
    </div>
}

export default NotFound;