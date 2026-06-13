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
              backgroundImage: `url("https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/8e238f54-3bb9-4540-ac6f-38e0b55484ac.jpg")`,
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
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/8e238f54-3bb9-4540-ac6f-38e0b55484ac.jpg"
                alt="Классический букет"
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
                  <h3>Классика</h3>
                  <span className="price">1 900 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  25 ягод клубники в тёмном и белом шоколаде, оформление в крафтовой упаковке.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Романтика
              </span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/c1c821dd-547c-44d7-803a-f67bae95e51e.jpg"
                alt="Шоколадный люкс"
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
                  <h3>Шоколадный Люкс</h3>
                  <span className="price">3 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Клубника в бельгийском шоколаде, шоколадные розы, топпинги и декор.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/b18351fb-42cf-481a-b7a7-b5112c46ca78.jpg"
                alt="Шоколадные цветы"
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
                  <h3>Шоколадные Цветы</h3>
                  <span className="price">2 500 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Авторские цветы из тёмного и молочного шоколада — выглядят как настоящие.
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
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/8e238f54-3bb9-4540-ac6f-38e0b55484ac.jpg"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/c1c821dd-547c-44d7-803a-f67bae95e51e.jpg"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/b18351fb-42cf-481a-b7a7-b5112c46ca78.jpg"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/2b65b2b6-923c-4466-95c0-ee36c7b341e5/files/8e238f54-3bb9-4540-ac6f-38e0b55484ac.jpg"
                alt="Фото 4"
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
