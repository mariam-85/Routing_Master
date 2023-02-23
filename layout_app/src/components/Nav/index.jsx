import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function Nav() {
  return (
    <nav className={style.nav_menu}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/categories'>Categories</Link>
    </nav>
  )
}
