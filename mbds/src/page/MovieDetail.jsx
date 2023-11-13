import React from 'react'
import { useLocation  } from 'react-router-dom';

import styled from '../styles/page/MovieDetail.module.css'

export default function MovieDetail() {
    const location = useLocation();
    if(!location.state) return <div>유효하지 않은 접근입니다.</div>

    const { state: { movie: { title, poster_path }}} = location;


  return (
    <div className={styled.wrapper}>
        <img alt={title} src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}/>
        <h2>{title}</h2>
    </div>
  )
}
