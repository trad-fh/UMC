import React from 'react'
import { useLocation } from 'react-router-dom';

import styled from '../styles/page/MovieDetail.module.css'

export default function VideoDetail() {
  const location = useLocation();
  if(!location.state) return <div>유효하지 않은 접근입니다.</div>

  console.log(location.state);

  const { state: {name, title, poster_path }} = location;

  return (
    <div className={styled.wrapper}>
        <img alt={title || name} src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}/>
        <h2>{title || name}</h2>
    </div>
  )
}