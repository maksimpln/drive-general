import { Link } from "react-router-dom";
import { DrivePageShell } from "@components/drive-layout";
import { DriveButtonComponent } from "@components/drive-button";
import { CarCardComponent } from "@components/car-card";
import { CARS } from "@data/cars";

const features = [
  { name: "Проверенные авто", desc: "Диагностика и юридическая чистота." },
  { name: "Гарантия сделки", desc: "Прозрачные условия покупки." },
  { name: "Выгодный трейд-ин", desc: "Оценка автомобиля за 30 минут." },
  { name: "Поддержка 24/7", desc: "Менеджер всегда на связи." },
];

const popularCars = CARS.slice(0, 4);

export const MainPage = () => (
  <DrivePageShell className="page-home">
    <section className="hero">
      <div className="hero-inner">
        <div>
          <h1>
            Премиальные
            <br />
            автомобили
            <br />
            для вас
          </h1>
          <p>
            Новые и проверенные автомобили премиум-класса. Каталог с фильтрами, прозрачная
            цена, кредит и поддержка менеджера.
          </p>
          <div className="hero-buttons">
            <DriveButtonComponent to="/catalog" variant="gold">
              Смотреть каталог
            </DriveButtonComponent>
            <DriveButtonComponent to="/credit">Рассчитать кредит</DriveButtonComponent>
            <DriveButtonComponent to="/chat">Связаться с менеджером</DriveButtonComponent>
          </div>
        </div>
        <div className="hero-right">
          <div className="mini-card">
            <div className="title">Подбор за 10 минут</div>
            <div className="sub">Оставьте заявку и получите 3 лучших варианта по бюджету.</div>
          </div>
          <div className="mini-card">
            <div className="title">Кредит от 9.2%</div>
            <div className="sub">Предварительное одобрение онлайн за 3 минуты.</div>
          </div>
        </div>
      </div>
    </section>

    <section className="features">
      {features.map((f) => (
        <div key={f.name} className="feature">
          <div className="name">{f.name}</div>
          <div className="desc">{f.desc}</div>
        </div>
      ))}
    </section>

    <div className="section-head">
      <h2>Популярные модели</h2>
      <Link to="/catalog">Смотреть все →</Link>
    </div>

    <section className="grid">
      {popularCars.map((car) => (
        <CarCardComponent key={car.id} car={car} />
      ))}
    </section>

    <div className="section-head">
      <h2>Сервисы</h2>
    </div>

    <section className="catalog-tools catalog-tools--home">
      <Link to="/trade-in" className="tool-card">
        <span className="tool-card__dev">Скоро</span>
        <b>Трейд-ин</b>
        <span>Оценка вашего авто</span>
      </Link>
      <Link to="/test-drive" className="tool-card">
        <span className="tool-card__dev">Скоро</span>
        <b>Тест-драйв</b>
        <span>Запись на поездку</span>
      </Link>
      <Link to="/compare" className="tool-card">
        <span className="tool-card__dev">Скоро</span>
        <b>Сравнение</b>
        <span>До 3 автомобилей</span>
      </Link>
      <Link to="/ai-chat" className="tool-card">
        <span className="tool-card__dev">Скоро</span>
        <b>AI-помощник</b>
        <span>Подбор по запросу</span>
      </Link>
    </section>
  </DrivePageShell>
);

export default MainPage;
