import React from "react";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg"
  // добавляй имена файлов сюда
];

export default function Gallery(){
  return (
    <main className="container">
      <h2>Галерея — До и После</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img src={src} alt={`Работа ${i+1}`} />
          </div>
        ))}
      </div>
      <p className="muted">Хочешь, чтобы мы разместили твои фотографии? Пиши в Instagram или WhatsApp.</p>
    </main>
  );
}
