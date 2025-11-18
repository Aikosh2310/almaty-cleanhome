import React from "react";

const phone = "+77082249676"; // твой номер
const whatsappLink = `https://wa.me/${phone.replace(/\D/g,'')}`;

export default function App(){
  return (
    <div className="site">
      <header className="hero">
        <div className="container">
          <h1>Almaty CleanHome</h1>
          <p className="lead">Профессиональная химчистка мебели, уборка квартир и уборка после ремонта в Алматы</p>
          <div className="cta">
            <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">Написать в WhatsApp</a>
            <a className="btn ghost" href={`tel:${phone}`}>Позвонить: {phone}</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="services">
          <h2>Наши услуги</h2>
          <div className="grid">
            <div className="card"><h3>Химчистка мебели</h3><p>Кресла, диваны, стулья — удаляем пятна, запахи и возвращаем цвет.</p></div>
            <div className="card"><h3>Клининг домов и квартир</h3><p>Ежедневная уборка, генеральная, перед сдачей/после ремонта.</p></div>
            <div className="card"><h3>Уборка после ремонта</h3><p>Удаляем строительную пыль, моем поверхности, готовим к жизни.</p></div>
          </div>
        </section>

        <section className="why">
          <h2>Почему выбирают нас</h2>
          <ul>
            <li>Профессиональное оборудование: Karcher, пароочистители, аппараты для химчистки</li>
            <li>Качественная, безопасная химия</li>
            <li>Озонатор для дезинфекции и удаления запахов</li>
            <li>Быстро и аккуратно</li>
          </ul>
        </section>

        <section className="work">
          <h2>Примеры работ</h2>
          <p>Снимайте видео до/после — мы публикуем результаты в Instagram и даём скидки за репост.</p>
        </section>

        <section className="contact">
          <h2>Связаться</h2>
          <p>Готовы приехать и оценить на месте. Пишите в WhatsApp или звоните.</p>
          <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">Написать в WhatsApp</a>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Almaty CleanHome — химчистка и клининг</small>
        </div>
      </footer>
    </div>
  );
}

