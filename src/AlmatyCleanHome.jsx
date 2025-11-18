import React from 'react'

export default function AlmatyCleanHome(){
  const phone = "+7 (707) 123-45-67";
  const email = "info@almatycleanhome.kz";

  function handleContactSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phoneInput = form.phone.value.trim();
    const msg = form.message.value.trim();
    const subject = encodeURIComponent(`Заказ: химчистка / уборка — ${name}`);
    const body = encodeURIComponent(`Имя: ${name}%0AТелефон: ${phoneInput}%0A%0AСообщение:%0A${msg}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <div style={{fontFamily: 'Arial, sans-serif', color: '#111', background: '#f7f7f8', minHeight:'100vh'}}>
      <header style={{background:'#fff', padding:'20px 30px', boxShadow:'0 1px 4px rgba(0,0,0,0.06)'}}>
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:16}}>
            <div style={{width:48,height:48, borderRadius:8, background:'#16a34a', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700}}>AC</div>
            <div>
              <h1 style={{margin:0, fontSize:18}}>Almaty CleanHome — Химчистка & Клининг</h1>
              <div style={{fontSize:13, color:'#6b7280'}}>Диваны • Кресла • Кухонные гарнитуры • Уборка квартир</div>
            </div>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{fontSize:13, color:'#6b7280'}}>Звоните:</div>
            <a href={`tel:${phone.replace(/\s+/g,'')}`} style={{color:'#16a34a', fontWeight:600, textDecoration:'none'}}>{phone}</a>
          </div>
        </div>
      </header>

      <main style={{maxWidth:1100, margin:'30px auto', padding:'0 20px'}}>
        <section style={{display:'flex', gap:24, alignItems:'center', flexWrap:'wrap'}}>
          <div style={{flex:'1 1 420px'}}>
            <h2 style={{fontSize:28, margin:'0 0 12px'}}>Профессиональная химчистка и клининг по Алматы</h2>
            <p style={{color:'#374151'}}>Удаляем пятна, запахи и возвращаем мебели свежий вид: диваны, кресла, стулья, кухонные гарнитуры, матрасы и ковры. Выездная чистка, безопасная химия для детей и животных.</p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:16}}>
              <div style={{background:'#fff', padding:12, borderRadius:8}}>Быстро — часто в тот же день</div>
              <div style={{background:'#fff', padding:12, borderRadius:8}}>Безопасно — сертифицированная химия</div>
              <div style={{background:'#fff', padding:12, borderRadius:8}}>Профессионально — мощные аппараты</div>
              <div style={{background:'#fff', padding:12, borderRadius:8}}>Гарантия — фото до/после</div>
            </div>

            <div style={{marginTop:18}}>
              <a href="#gallery" style={{padding:'8px 14px', border:'1px solid #ddd', borderRadius:8, marginRight:8, textDecoration:'none', color:'#111'}}>Посмотреть работы</a>
              <a href="#contact" style={{padding:'8px 14px', background:'#16a34a', color:'#fff', borderRadius:8, textDecoration:'none'}}>Заказать уборку</a>
            </div>
          </div>

          <div style={{flex:'1 1 320px', borderRadius:10, overflow:'hidden', boxShadow:'0 6px 18px rgba(0,0,0,0.08)'}}>
            <img alt="Before After" src="https://images.unsplash.com/photo-1598899134739-3e6dd8f9d3b0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=123" style={{width:'100%', height:320, objectFit:'cover'}} />
          </div>
        </section>

        <section id="equipment" style={{background:'#fff', padding:18, borderRadius:10, marginTop:26}}>
          <h3>Оборудование</h3>
          <p>Мы работаем на: Karcher (моющий пылесос), пароочиститель, аппарат для химчистки мебели, озонатор и полный набор инвентаря.</p>
        </section>

        <section id="prices" style={{marginTop:18}}>
          <h3>Примерные цены</h3>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:8}}>
            <div style={{background:'#fff', padding:12, borderRadius:8, minWidth:160}}>Диван 2-х: <b>8 000 KZT</b></div>
            <div style={{background:'#fff', padding:12, borderRadius:8, minWidth:160}}>Кресло: <b>3 500 KZT</b></div>
            <div style={{background:'#fff', padding:12, borderRadius:8, minWidth:160}}>Матрас 1-сп: <b>6 000 KZT</b></div>
          </div>
        </section>

        <section id="gallery" style={{marginTop:18}}>
          <h3>Работы — До / После</h3>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:10, marginTop:8}}>
            {Array.from({length:8}).map((_,i)=>(
              <img key={i} src={`https://picsum.photos/seed/clean${i}/600/400`} alt={`work-${i}`} style={{width:'100%', height:120, objectFit:'cover', borderRadius:8}}/>
            ))}
          </div>
        </section>

        <section id="contact" style={{marginTop:18, background:'#fff', padding:16, borderRadius:8}}>
          <h3>Связаться</h3>
          <form onSubmit={handleContactSubmit} style={{display:'grid', gap:10, maxWidth:500}}>
            <input name="name" placeholder="Имя" required style={{padding:8, borderRadius:6, border:'1px solid #e5e7eb'}} />
            <input name="phone" placeholder="Телефон" required style={{padding:8, borderRadius:6, border:'1px solid #e5e7eb'}} />
            <textarea name="message" placeholder="Сообщение" rows="4" style={{padding:8, borderRadius:6, border:'1px solid #e5e7eb'}}/>
            <button style={{padding:'10px 14px', background:'#16a34a', color:'#fff', borderRadius:8, border:0}}>Отправить</button>
          </form>
          <div style={{marginTop:12}}>
            <div style={{fontSize:13, color:'#6b7280'}}>Телефон: <a href={`tel:${phone.replace(/\s+/g,'')}`} style={{color:'#16a34a', textDecoration:'none'}}>{phone}</a></div>
            <div style={{fontSize:13, color:'#6b7280'}}>Email: <a href={`mailto:{email}`} style={{color:'#111', textDecoration:'none'}}>{email}</a></div>
          </div>
        </section>

      </main>

      <footer style={{background:'#fff', padding:16, marginTop:26, borderTop:'1px solid #eee', textAlign:'center'}}>
        © {new Date().getFullYear()} Almaty CleanHome — Химчистка и клининг
      </footer>
    </div>
  )
}
