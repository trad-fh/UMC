import React, { useState } from 'react'

import Ad from './Ad'

export default function AdPage() {
    const [btnText, setBtnText] = useState("광고 안보기");
    const [isAdActivate, setIsAdActivate] = useState(true);
    const handleToggleClick = () => {
        setIsAdActivate(!isAdActivate);
        (btnText === "광고 안보기") ? setBtnText("광고 보기") : setBtnText("광고 안보기");
    }
  return (
    <div>
        <Ad isAdActive={isAdActivate}/>
        <button onClick={handleToggleClick}>{btnText}</button>
    </div>
  )
}
