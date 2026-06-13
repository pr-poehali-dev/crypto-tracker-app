export default function Index() {
  const WA_LINK = "https://wa.me/79991234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%B1%D1%83%D0%BA%D0%B5%D1%82";
  const TG_LINK = "https://t.me/senorbuket";

  return (
    <>
      <div className="grain-overlay" />

      {/* HEADER */}
      <header className="header">
        <div className="logo">СЕНЬОР<span style={{ color: "var(--primary)" }}>*</span>БУКЕТ</div>
        <nav>
          <a href="#catalog">Каталог</a>
          <a href="#about">О нас</a>
          <a href="#gallery">Галерея</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
          <button className="btn-cta">Заказать</button>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--primary)",
              fontWeight: 700,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              padding: "6px 14px",
              borderRadius: "20px",
              marginBottom: "20px",
              border: "1px solid var(--secondary)"
            }}>
              Съедобные букеты ручной работы
            </div>
            <h1 className="hero-title">
              БУКЕТЫ,
              <br />
              КОТОРЫЕ <span>ДАРЯТ</span>
              <br />
              ВКУС
            </h1>
            <p className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed" style={{ color: "#8a6070" }}>
              Клубника в шоколаде, шоколадные розы и съедобные букеты — идеальный подарок на любой праздник.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "#25D366", color: "white", border: "2px solid #1eb855", boxShadow: "4px 4px 0 #1eb855", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </a>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "#229ED9", color: "white", border: "2px solid #1a8fc4", boxShadow: "4px 4px 0 #1a8fc4", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </button>
              </a>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/4cd240e8-d291-4cf7-8a2a-9245077d5ce0.png")`,
            }}
          >
            <div className="sticker" style={{ background: "var(--primary)", borderColor: "var(--primary)" }}>
              РУЧНАЯ
              <br />
              РАБОТА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВКУСНО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С ЛЮБОВЬЮ
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" style={{ background: "var(--primary)" }}>
          <div className="marquee-content">
            &nbsp; * КЛУБНИКА В ШОКОЛАДЕ * СЪЕДОБНЫЕ БУКЕТЫ * ШОКОЛАДНЫЕ ЦВЕТЫ * ПОДАРОК С ВКУСОМ * РУЧНАЯ РАБОТА *
            КЛУБНИКА В ШОКОЛАДЕ * СЪЕДОБНЫЕ БУКЕТЫ * ШОКОЛАДНЫЕ ЦВЕТЫ * ПОДАРОК С ВКУСОМ * РУЧНАЯ РАБОТА
          </div>
        </div>

        {/* CATALOG */}
        <section className="section-padding" id="catalog">
          <div className="section-header">
            <h2 className="section-title">КАТАЛОГ</h2>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="text-sm md:text-base"
              style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Заказать →
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)" }}>Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/a8f51314-85bf-4a86-9a69-5f494429a232.png"
                alt="Розы из шоколада"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Розы из шоколада</h3>
                  <span className="price">1 900 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#8a6070", marginBottom: "14px" }}>
                  25 шоколадных роз из тёмного и розового шоколада в крафтовой упаковке.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                  <button className="btn-cta" style={{ width: "100%", background: "var(--primary)", color: "white", border: "2px solid var(--primary)" }}>
                    Заказать
                  </button>
                </a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>Романтика</span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/58147bbf-2813-4b10-8409-c32f1b106ffc.png"
                alt="Нежный букет"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Нежность</h3>
                  <span className="price">2 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#8a6070", marginBottom: "14px" }}>
                  Розы из белого и розового шоколада с атласным бантом — нежно и изысканно.
                </p>
                <a href={TG_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                  <button className="btn-cta" style={{ width: "100%", background: "#229ED9", color: "white", border: "2px solid #1a8fc4" }}>
                    Заказать
                  </button>
                </a>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--primary)", border: "1px solid var(--secondary)" }}>Популярное</span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/4cd240e8-d291-4cf7-8a2a-9245077d5ce0.png"
                alt="Клубника в шоколаде"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Клубника в шоколаде</h3>
                  <span className="price">3 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#8a6070", marginBottom: "14px" }}>
                  Свежая клубника в молочном, тёмном и розовом шоколаде с топпингами.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                  <button className="btn-cta" style={{ width: "100%", background: "var(--primary)", color: "white", border: "2px solid var(--primary)" }}>
                    Заказать
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="retro-vibe" id="about" style={{ background: "var(--accent)" }}>
          <div>
            <h2 className="vibe-title" style={{ color: "var(--dark)" }}>МЫ ДЕЛАЕМ<br />ЭМОЦИИ.</h2>
            <p className="vibe-text" style={{ color: "#8a6070" }}>
              Каждый букет собирается вручную — из свежей клубники и настоящего шоколада. Идеальный подарок на день рождения, 8 марта, годовщину или просто потому что любишь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "#25D366", color: "white", border: "2px solid #1eb855", boxShadow: "4px 4px 0 #1eb855", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </a>
              <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
                <button className="btn-cta" style={{ background: "#229ED9", color: "white", border: "2px solid #1a8fc4", boxShadow: "4px 4px 0 #1a8fc4", display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </button>
              </a>
            </div>
          </div>
          <div className="vibe-img" style={{
            backgroundImage: `url("https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/c7a30553-5b29-46ea-bc68-5fa171c31d17.jpg")`
          }}></div>
        </section>

        {/* GALLERY */}
        <section className="section-padding" id="gallery">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            НАШИ РАБОТЫ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/a8f51314-85bf-4a86-9a69-5f494429a232.png" alt="Шоколадные розы" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/58147bbf-2813-4b10-8409-c32f1b106ffc.png" alt="Нежный букет" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/4cd240e8-d291-4cf7-8a2a-9245077d5ce0.png" alt="Клубника в шоколаде" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/c7a30553-5b29-46ea-bc68-5fa171c31d17.jpg" alt="Букет крупным планом" />
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section style={{
          background: "var(--primary)",
          padding: "50px 40px",
          textAlign: "center",
          borderTop: "var(--border)",
          borderBottom: "var(--border)"
        }} id="contacts">
          <h2 style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "clamp(24px, 4vw, 48px)",
            color: "white",
            marginBottom: "16px",
            textTransform: "uppercase"
          }}>
            ГОТОВЫ СДЕЛАТЬ ЗАКАЗ?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "32px", fontSize: "16px" }}>
            Напишите нам — ответим в течение 15 минут и обсудим все детали
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <button className="btn-cta" style={{ background: "#25D366", color: "white", border: "2px solid #1eb855", boxShadow: "4px 4px 0 #1eb855", fontSize: "16px", padding: "14px 28px", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </button>
            </a>
            <a href={TG_LINK} target="_blank" rel="noopener noreferrer">
              <button className="btn-cta" style={{ background: "#229ED9", color: "white", border: "2px solid #1a8fc4", boxShadow: "4px 4px 0 #1a8fc4", fontSize: "16px", padding: "14px 28px", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Написать в Telegram
              </button>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contacts-footer">
        <div>
          <div className="footer-logo">СЕНЬОР<span style={{ color: "var(--primary)" }}>*</span>БУКЕТ</div>
          <p style={{ color: "#8a6070", lineHeight: 1.6 }}>
            Съедобные букеты ручной работы. Клубника в шоколаде и шоколадные цветы — подарки, которые запоминаются.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#catalog" style={{ color: "inherit", textDecoration: "none" }}>Каталог</a></li>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#gallery" style={{ color: "inherit", textDecoration: "none" }}>Галерея</a></li>
            <li><a href="#contacts" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 9:00 – 20:00</li>
            <li>Сб–Вс: 10:00 – 18:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Связаться</h4>
          <ul>
            <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontWeight: 700 }}>WhatsApp</a></li>
            <li><a href={TG_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#229ED9", textDecoration: "none", fontWeight: 700 }}>Telegram</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
