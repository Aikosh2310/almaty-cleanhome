import React from "react";

export default function Services(){
  return (
    <main className="container">
      <h2>Наши услуги и цены</h2>
      <div className="price-grid">
        <div className="card">
          <h3>Химчистка кресла</h3>
          <p>от 4 000 ₸</p>
        </div>
        <div className="card">
          <h3>Химчистка дивана (2 места)</h3>
          <p>от 10 000 ₸</p>
        </div>
        <div className="card">
          <h3>Уборка квартиры (1 комната)</h3>
          <p>от 8 000 ₸</p>
        </div>
      </div>
      <p className="muted">Цены примерные — точный расчёт после осмотра.</p>
    </main>
  );
}
