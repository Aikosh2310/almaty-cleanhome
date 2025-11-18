import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <main className="container">
      <section className="hero-simple">
        <h1>Almaty CleanHome</h1>
        <p>Химчистка мебели, уборка квартир и уборка после ремонта в Алматы</p>
        <div className="hero-cta">
          <Link to="/services" className="btn">Услуги и цены</Link>
          <Link to="/gallery" className="btn ghost">Посмотреть галерею</Link>
        </div>
      </section>

      <section className="intro">
        <h2>Коротко о нас</h2>
        <p>Профессиональное оборудование, безопасная химия и опытная команда — быстро и аккуратно.</p>
      </section>
    </main>
  );
}
