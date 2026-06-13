export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">СЕНЬОР*БУКЕТ</div>
        <nav>
          <a href="#">Букеты</a>
          <a href="#">О нас</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПОДАРКИ,
              <br />
              КОТОРЫЕ <span>ЕДЯТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Съедобные букеты из клубники в шоколаде и шоколадных цветов. Вкусно, красиво и незабываемо — идеальный подарок для любого повода.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать букет
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть каталог
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/4cd240e8-d291-4cf7-8a2a-9245077d5ce0.png")`,
            }}
          >
            <div className="sticker">
              СВЕЖАЯ
              <br />
              КЛУБНИКА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВКУСНО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЛЮБОВЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * КЛУБНИКА В ШОКОЛАДЕ * СЪЕДОБНЫЕ БУКЕТЫ * ШОКОЛАДНЫЕ ЦВЕТЫ * ПОДАРОК С ВКУСОМ * СЕНЬОР БУКЕТ *
            КЛУБНИКА В ШОКОЛАДЕ * СЪЕДОБНЫЕ БУКЕТЫ * ШОКОЛАДНЫЕ ЦВЕТЫ * ПОДАРОК С ВКУСОМ * СЕНЬОР БУКЕТ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ БУКЕТЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Весь каталог
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/a8f51314-85bf-4a86-9a69-5f494429a232.png"
                alt="Шоколадные розы"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Розы из шоколада</h3>
                  <span className="price">1 900 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  25 шоколадных роз из тёмного и розового шоколада в крафтовой упаковке.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Романтика
              </span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/58147bbf-2813-4b10-8409-c32f1b106ffc.png"
                alt="Нежный букет"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Нежность</h3>
                  <span className="price">2 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Розы из белого и розового шоколада с белым бантом — нежно и изысканно.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/4cd240e8-d291-4cf7-8a2a-9245077d5ce0.png"
                alt="Клубника в шоколаде"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Клубника в шоколаде</h3>
                  <span className="price">3 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свежая клубника в молочном, тёмном и розовом шоколаде с топпингами.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВКУС — ЭТО ТОЖЕ ПОДАРОК.</h2>
            <p className="vibe-text">
              Мы делаем не просто сладости — мы создаём эмоции. Каждый букет собирается вручную, из свежей клубники и настоящего шоколада. Это идеальный подарок на день рождения, 8 марта, годовщину или просто так — потому что ты думал о человеке.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @SENOR.BUKET
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/a8f51314-85bf-4a86-9a69-5f494429a232.png"
                alt="Шоколадные розы"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/58147bbf-2813-4b10-8409-c32f1b106ffc.png"
                alt="Нежный букет"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/4cd240e8-d291-4cf7-8a2a-9245077d5ce0.png"
                alt="Клубника в шоколаде"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/bucket/a8f51314-85bf-4a86-9a69-5f494429a232.png"
                alt="Букет из роз"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">СЕНЬОР*БУКЕТ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Съедобные букеты из клубники в шоколаде и шоколадных цветов. Подарки, которые запоминаются на вкус.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Букеты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
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
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+79991234567" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (999) 123-45-67
              </a>
            </li>
            <li>
              <a href="mailto:hello@senorbuket.ru" style={{ color: "inherit", textDecoration: "none" }}>
                hello@senorbuket.ru
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}