import React from "react";
import { Link, useLocation } from "react-router-dom";

const INSTAGRAM = "https://www.instagram.com/almaty.cleanhome/";

export default function Nav(){
  const loc = useLocation();
  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <div className="logo"><Link to="/">Almaty CleanHome</Link></div>
        <nav className="nav">
          <Link className={loc.pathname === "/" ? "active":""} to="/">Главная</Link>
          <Link className={loc.pathname === "/gallery" ? "active":""} to="/gallery">Галерея</Link>
          <Link className={loc.pathname === "/services" ? "active":""} to="/services">Услуги</Link>
          <Link className={loc.pathname === "/contact" ? "active":""} to="/contact">Контакты</Link>
          <a className="insta" href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        </nav>
      </div>
    </header>
  );
}
