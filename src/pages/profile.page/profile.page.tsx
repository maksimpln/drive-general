import { BreadcrumbsComponent } from "@components/breadcrumbs";
import { DrivePageShell } from "@components/drive-layout";
import { DriveButtonComponent } from "@components/drive-button";

const personalRows = [
  ["Имя", "Иван Иванов"],
  ["Телефон", "+7 (999) 123-45-67"],
  ["Email", "ivan@mail.ru"],
  ["Город", "Москва"],
  ["Дата регистрации", "15.02.2026"],
];

const applications = [
  {
    title: "Заявка на кредит",
    badge: "Одобрено",
    badgeClass: "badge--green",
    meta: ["Авто: BMW 5 серия 2024", "Сумма кредита: 5 250 000 ₽", "Платёж: 92 500 ₽ / мес"],
    actions: [
      { label: "Перейти к договору", to: "/credit", gold: true },
      { label: "Обсудить в чате", to: "/chat" },
    ],
  },
  {
    title: "Бронирование автомобиля",
    badge: "Ожидает",
    badgeClass: "",
    meta: ["Авто: Mercedes-Benz GLC 2023", "Дата: 10.05.2026", "Статус: подтверждение менеджером"],
    actions: [
      { label: "Открыть авто", to: "/car/mercedes-glc-2023" },
      { label: "Уточнить статус", to: "/chat" },
    ],
  },
  {
    title: "Трейд-ин оценка",
    badge: "Не завершено",
    badgeClass: "badge--red",
    meta: ["Авто клиента: Toyota Camry 2018", "Предварительная оценка: 1 550 000 ₽"],
    actions: [{ label: "Записаться на осмотр", to: "/chat" }],
  },
];

const favorites = [
  {
    title: "BMW 5 серия 2024",
    meta: "2.0 • Автомат • 32 000 км",
    price: "6 450 000 ₽",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mercedes-Benz GLC 2023",
    meta: "2.0 • Автомат • 41 000 км",
    price: "5 890 000 ₽",
    image:
      "https://images.unsplash.com/photo-1616789916188-3f0a70d7c7b7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const ProfilePage = () => (
  <DrivePageShell className="page-profile">
    <BreadcrumbsComponent items={[{ label: "Главная", to: "/" }, { label: "Личный кабинет" }]} />

    <section className="hero">
      <div className="hero-inner">
        <div>
          <h1>Личный кабинет</h1>
          <p>
            Здесь вы можете отслеживать статус заявок, сохранять избранные автомобили, общаться с
            менеджером и оформлять кредит.
          </p>
        </div>
        <div className="user-card">
          <div className="avatar">ИИ</div>
          <div className="uinfo">
            <b>Иван Иванов</b>
            <span>ivan@mail.ru</span>
            <div className="status">
              <span className="dot" />
              <span>Аккаунт активен</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page">
      <div className="panel panel-pad">
        <h2>Персональные данные</h2>
        <p className="sub">Информация пользователя (прототип).</p>
        <div className="info">
          {personalRows.map(([label, value]) => (
            <div key={label} className="row">
              <span>{label}</span>
              <b>{value}</b>
            </div>
          ))}
        </div>
        <div className="row-actions">
          <DriveButtonComponent to="/chat">Связаться с менеджером</DriveButtonComponent>
          <DriveButtonComponent to="/credit" variant="gold">
            Оформить кредит
          </DriveButtonComponent>
        </div>
      </div>

      <div className="panel panel-pad">
        <h2>Заявки и действия</h2>
        <p className="sub">История заявок и статус обработки.</p>
        <div className="apps">
          {applications.map((app) => (
            <div key={app.title} className="app">
              <div className="app-top">
                <b>{app.title}</b>
                <span className={`badge ${app.badgeClass}`.trim()}>{app.badge}</span>
              </div>
              <div className="app-meta">
                {app.meta.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < app.meta.length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="app-actions">
                {app.actions.map((a) => (
                  <DriveButtonComponent
                    key={a.label}
                    to={a.to}
                    variant={a.gold ? "gold" : "default"}
                  >
                    {a.label}
                  </DriveButtonComponent>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fav-section">
          <h2>Избранные автомобили</h2>
          <p className="sub">Сохранённые модели.</p>
          <div className="fav">
            {favorites.map((f) => (
              <div key={f.title} className="fav-item">
                <div className="fav-img" style={{ backgroundImage: `url('${f.image}')` }} />
                <div className="fav-info">
                  <b>{f.title}</b>
                  <span>{f.meta}</span>
                </div>
                <div className="fav-price">{f.price}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12 }}>
            <DriveButtonComponent to="/catalog">Вернуться в каталог</DriveButtonComponent>
          </div>
        </div>
      </div>
    </section>
  </DrivePageShell>
);

export default ProfilePage;
