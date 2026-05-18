import { Link, useParams } from "react-router-dom";
import { BreadcrumbsComponent } from "@components/breadcrumbs";
import { DrivePageShell } from "@components/drive-layout";
import { DriveButtonComponent } from "@components/drive-button";
import { CarCardComponent } from "@components/car-card";
import { IconArrowLeft, IconArrowRight } from "@components/drive-icons/icons";
import { CARS, getCarById } from "@data/cars";

export const CarsPage = () => {
  const { id } = useParams<{ id: string }>();
  const car = id ? getCarById(id) : undefined;

  if (!car) {
    return (
      <DrivePageShell className="page-car">
        <BreadcrumbsComponent
          items={[
            { label: "Главная", to: "/" },
            { label: "Каталог", to: "/catalog" },
            { label: "Не найдено" },
          ]}
        />
        <div className="catalog-empty panel panel-pad">
          <h1>Автомобиль не найден</h1>
          <p>Возможно, объявление снято с публикации.</p>
          <DriveButtonComponent to="/catalog" variant="gold">
            В каталог
          </DriveButtonComponent>
        </div>
      </DrivePageShell>
    );
  }

  const similar = CARS.filter((c) => c.id !== car.id && c.brand === car.brand).slice(0, 2);

  return (
    <DrivePageShell className="page-car">
      <BreadcrumbsComponent
        items={[
          { label: "Главная", to: "/" },
          { label: "Каталог", to: "/catalog" },
          { label: car.fullTitle },
        ]}
      />

      <section className="page">
        <div className="panel">
          <div className="car-title">
            <div>
              <h1>{car.fullTitle}</h1>
              <div className="tags">
                <span className="tag">{car.badge}</span>
                <span className={`tag tag--gray`}>
                  {car.condition === "new" ? "Новый" : "С пробегом"}
                </span>
                <span className="tag tag--gray">В наличии</span>
              </div>
            </div>
          </div>

          <div className="gallery">
            <div
              className="main-photo"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(8,10,12,.72) 0%, rgba(8,10,12,.35) 60%, rgba(8,10,12,.15) 100%), url('${car.images[0]}')`,
              }}
            >
              <div className="gallery-controls">
                <button type="button" className="arrow" title="Назад">
                  <IconArrowLeft />
                </button>
                <button type="button" className="arrow" title="Вперед">
                  <IconArrowRight />
                </button>
              </div>
            </div>

            <div className="thumbs">
              {car.images.map((url) => (
                <div key={url} className="thumb" style={{ backgroundImage: `url('${url}')` }} />
              ))}
            </div>
          </div>

          <section className="price-breakdown">
            <h2>Прозрачная цена</h2>
            <div className="price-rows">
              <div className="price-row">
                <span>Цена автомобиля</span>
                <b>{car.priceFormatted}</b>
              </div>
              {car.monthlyPayment && (
                <div className="price-row">
                  <span>Платёж в кредит от</span>
                  <b className="gold-val">{car.monthlyPayment.toLocaleString("ru-RU")} ₽ / мес</b>
                </div>
              )}
              <div className="price-row">
                <span>Гарантия юридической чистоты</span>
                <b className="ok">Включена</b>
              </div>
            </div>
          </section>

          <div className="section">
            <h2>Характеристики</h2>
            <div className="spec-grid">
              <div className="spec">
                <div className="val">{car.engine}</div>
                <div className="name">Двигатель</div>
              </div>
              <div className="spec">
                <div className="val">{car.power}</div>
                <div className="name">Мощность</div>
              </div>
              <div className="spec">
                <div className="val">{car.consumption}</div>
                <div className="name">Расход</div>
              </div>
              <div className="spec">
                <div className="val">{car.transmission}</div>
                <div className="name">Коробка</div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Комплектация</h2>
            <div className="list">
              {car.equipment.map((item) => (
                <div key={item} className="li">
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="side">
          <div className="panel price-box">
            <div className="price-big">{car.priceFormatted}</div>
            {car.monthlyPayment && (
              <div className="credit-sub">
                от <b>{car.monthlyPayment.toLocaleString("ru-RU")} ₽</b> / мес в кредит
              </div>
            )}
            <div className="btns">
              <DriveButtonComponent to="/credit" variant="gold" block>
                Забронировать
              </DriveButtonComponent>
              <DriveButtonComponent to="/credit" block>
                Рассчитать кредит
              </DriveButtonComponent>
              <DriveButtonComponent to="/chat" block>
                Задать вопрос в чат
              </DriveButtonComponent>
            </div>
            <div className="divider" />
            <div className="car-actions-stub">
              <Link to="/test-drive" className="stub-link">
                Тест-драйв <span className="stub-link__tag">скоро</span>
              </Link>
              <Link to="/trade-in" className="stub-link">
                Трейд-ин <span className="stub-link__tag">скоро</span>
              </Link>
              <Link to="/compare" className="stub-link">
                Сравнить <span className="stub-link__tag">скоро</span>
              </Link>
            </div>
            <div className="divider" />
            <div className="mini-info">
              {car.mileage != null && (
                <div>
                  <b>Пробег:</b> {car.mileage.toLocaleString("ru-RU")} км
                </div>
              )}
              <div>
                <b>Год:</b> {car.year}
              </div>
              <div>
                <b>Цвет:</b> {car.color}
              </div>
              <div>
                <b>Привод:</b> {car.drive}
              </div>
              <div>
                <b>VIN проверен:</b> Да
              </div>
            </div>
          </div>

          {car.history && car.history.length > 0 && (
            <div className="history">
              <h3>Проверенная история</h3>
              <div className="hist-list">
                {car.history.map((h) => (
                  <div key={h.label} className="hist-item">
                    <span>{h.label}</span>
                    <span className="ok">{h.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontSize: 13 }}>
                <Link to="/chat" className="link-gold">
                  Запросить полный отчёт →
                </Link>
              </div>
            </div>
          )}
        </aside>
      </section>

      {similar.length > 0 && (
        <>
          <div className="section-head">
            <h2>Похожие модели</h2>
            <Link to="/catalog">Весь каталог →</Link>
          </div>
          <section className="grid catalog-grid">
            {similar.map((c) => (
              <CarCardComponent key={c.id} car={c} />
            ))}
          </section>
        </>
      )}
    </DrivePageShell>
  );
};

export default CarsPage;
