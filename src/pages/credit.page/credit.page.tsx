import { BreadcrumbsComponent } from "@components/breadcrumbs";
import { DrivePageShell } from "@components/drive-layout";
import { DriveButtonComponent } from "@components/drive-button";
import { DriveInputComponent, DriveSelectComponent } from "@components/drive-input";

const termOptions = [
  { value: "12", label: "12 месяцев" },
  { value: "24", label: "24 месяца" },
  { value: "36", label: "36 месяцев" },
  { value: "48", label: "48 месяцев" },
  { value: "60", label: "60 месяцев" },
  { value: "72", label: "72 месяца" },
  { value: "84", label: "84 месяца" },
];

const advantages = [
  { t: "Одобрение онлайн", d: "Получите предложение от банков-партнёров без визита." },
  { t: "Без скрытых комиссий", d: "Честные условия и прозрачный договор." },
  { t: "Гибкий срок", d: "От 12 месяцев до 7 лет под ваш бюджет." },
  { t: "Быстрое оформление", d: "Оформление документов за 30 минут в салоне." },
];

export const CreditPage = () => (
  <DrivePageShell className="page-credit">
    <BreadcrumbsComponent items={[{ label: "Главная", to: "/" }, { label: "Кредит" }]} />

    <section className="hero">
      <div className="hero-inner">
        <div>
          <h1>
            Кредит на автомобиль
            <br />
            за 3 минуты онлайн
          </h1>
          <p>
            Предварительное одобрение без визита в салон. Заполните заявку и получите предложение
            от банков-партнёров.
          </p>
        </div>
        <div className="hero-card">
          <div className="title">Условия DriveGeneral</div>
          <div className="sub">
            Ставка от <b style={{ color: "var(--gold)" }}>9.2%</b> годовых • Первоначальный взнос от{" "}
            <b style={{ color: "var(--gold)" }}>0%</b> • Срок до <b style={{ color: "var(--gold)" }}>7 лет</b>.
          </div>
        </div>
      </div>
    </section>

    <section className="page">
      <div className="panel panel-pad">
        <div className="calc-top">
          <h2>Калькулятор кредита</h2>
          <div className="hint">* расчёт предварительный</div>
        </div>

        <div className="form">
          <DriveInputComponent label="Стоимость автомобиля" defaultValue="6 450 000 ₽" />
          <DriveInputComponent label="Первоначальный взнос" defaultValue="1 200 000 ₽" />
          <DriveSelectComponent label="Срок кредита" defaultValue="36" options={termOptions} />
          <DriveInputComponent label="Процентная ставка" defaultValue="9.2%" />
          <DriveInputComponent
            label="Выбранный автомобиль"
            wide
            defaultValue="BMW 5 серия 2024 (2.0 / Автомат)"
          />
          <DriveInputComponent label="Ваше имя" placeholder="Иван Иванов" />
          <DriveInputComponent label="Телефон" placeholder="+7 (999) 123-45-67" />
          <DriveInputComponent
            label="Комментарий"
            wide
            placeholder="Например: хочу оформить без первого взноса"
          />
        </div>

        <p className="note">
          Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных данных. Это
          демонстрационный прототип, заявка не отправляется.
        </p>

        <div className="divider" />

        <h2 style={{ margin: 0, fontSize: 16, letterSpacing: "-0.2px" }}>
          Почему выгодно оформить у нас
        </h2>
        <div className="adv">
          {advantages.map((a) => (
            <div key={a.t} className="adv-item">
              <div className="t">{a.t}</div>
              <div className="d">{a.d}</div>
            </div>
          ))}
        </div>
      </div>

      <aside className="panel result">
        <h3>Ваш расчёт</h3>
        <div className="res-grid">
          <div className="res-item">
            <span>Сумма кредита</span>
            <b>5 250 000 ₽</b>
          </div>
          <div className="res-item">
            <span>Ставка</span>
            <b className="gold-val">9.2%</b>
          </div>
          <div className="res-item">
            <span>Срок</span>
            <b>36 мес</b>
          </div>
          <div className="res-item">
            <span>Платёж в месяц</span>
            <b className="gold-val">92 500 ₽</b>
          </div>
          <div className="res-item">
            <span>Решение банка</span>
            <b>Предварительно</b>
          </div>
        </div>
        <div className="btns">
          <DriveButtonComponent to="/profile" variant="gold" block>
            Отправить заявку
          </DriveButtonComponent>
          <DriveButtonComponent to="/chat" block>
            Проконсультироваться
          </DriveButtonComponent>
          <DriveButtonComponent to="/car/bmw-5-2024" block>
            Вернуться к авто
          </DriveButtonComponent>
        </div>
        <div className="divider" />
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
          <b style={{ color: "var(--text)" }}>Важно:</b> окончательные условия подтверждаются банком
          после проверки документов.
        </p>
      </aside>
    </section>
  </DrivePageShell>
);

export default CreditPage;
