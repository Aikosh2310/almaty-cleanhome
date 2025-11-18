import React from "react";

const phone = "+77082249676";
const whatsappLink = `https://wa.me/${phone.replace(/\D/g,'')}`;
const INSTAGRAM = "https://www.instagram.com/almaty.cleanhome/";

export default function Contact(){
  return (
    <main className="container">
      <h2>Контакты</h2>
      <p>Пиши в WhatsApp или в Instagram — ответим быстро.</p>
      <div className="contact-grid">
        <a className="btn" href={whatsappLink} target="_blank" rel="noreferrer">Написать в WhatsApp</a>
        <a className="btn ghost" href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        <p className="muted">Тел: {phone}</p>
      </div>
    </main>
  );
}
