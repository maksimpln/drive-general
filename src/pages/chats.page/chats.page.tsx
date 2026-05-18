import { Link } from "react-router-dom";
import { BreadcrumbsComponent } from "@components/breadcrumbs";
import { DrivePageShell } from "@components/drive-layout";
import { DriveSmallButtonComponent } from "@components/drive-button";
import { IconSearch, IconSend } from "@components/drive-icons/icons";

const dialogs = [
  {
    id: "dg",
    initials: "DG",
    name: "Менеджер DriveGeneral",
    time: "сейчас",
    msg: "Здравствуйте! Чем могу помочь?",
    active: true,
    online: true,
  },
  {
    id: "cr",
    initials: "CR",
    name: "Кредитный отдел",
    time: "12:05",
    msg: "Подготовили для вас варианты банков.",
    active: false,
    online: false,
  },
  {
    id: "ti",
    initials: "TI",
    name: "Трейд-ин специалист",
    time: "вчера",
    msg: "Оценка вашего авто возможна сегодня.",
    active: false,
    online: false,
  },
];

export const ChatsPage = () => (
  <DrivePageShell className="page-chat">
    <BreadcrumbsComponent items={[{ label: "Главная", to: "/" }, { label: "Чат" }]} />

    <section className="chat-wrap">
      <div className="panel dialogs">
        <h2>Диалоги</h2>
        <div className="search">
          <IconSearch />
          <input placeholder="Поиск по чатам..." />
        </div>
        <div className="dialog-list">
          {dialogs.map((d) => (
            <div key={d.id} className={`dialog${d.active ? " active" : ""}`}>
              <div className="avatar avatar--sm">{d.initials}</div>
              <div className="d-info">
                <div className="d-top">
                  <div className="d-name">{d.name}</div>
                  <div className="d-time">{d.time}</div>
                </div>
                <div className="d-msg">{d.msg}</div>
                {d.online && (
                  <div className="online">
                    <span className="dot" />
                    <span>Онлайн</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel chat">
        <div className="chat-head">
          <div className="left">
            <div className="avatar avatar--sm">DG</div>
            <div className="title">
              <b>Менеджер DriveGeneral</b>
              <span>Премиум консультация • Онлайн</span>
            </div>
          </div>
          <div className="head-actions">
            <DriveSmallButtonComponent to="/car/bmw-5-2024" variant="gold">
              Открыть авто
            </DriveSmallButtonComponent>
            <DriveSmallButtonComponent to="/credit">Кредит</DriveSmallButtonComponent>
            <DriveSmallButtonComponent to="/profile">Кабинет</DriveSmallButtonComponent>
          </div>
        </div>

        <div className="chat-body">
          <div className="msg msg--manager">
            Здравствуйте! 👋
            <br />
            Я менеджер DriveGeneral. Чем могу помочь?
            <div className="time">12:41</div>
          </div>
          <div className="msg msg--user">
            Добрый день! Интересует <b>BMW 5 серия 2024</b>.
            <br />
            Хотел бы узнать условия кредита.
            <div className="time">12:42</div>
          </div>
          <div className="msg msg--manager">
            Отличный выбор. BMW 5 серия сейчас в наличии.
            <br />
            Мы можем оформить кредит от 9.2% годовых, срок до 7 лет.
            <div className="time">12:42</div>
          </div>
          <div className="msg msg--manager">
            Хотите, я сделаю расчёт по платежу? Напишите:
            <br />— первый взнос
            <br />— желаемый срок
            <div className="time">12:43</div>
          </div>
          <div className="msg msg--user">
            Первый взнос 1 200 000 ₽, срок 3 года.
            <div className="time">12:44</div>
          </div>
          <div className="msg msg--manager">
            Отлично! Предварительный платеж будет около{" "}
            <b style={{ color: "var(--gold)" }}>92 500 ₽</b> в месяц.
            <br />
            Могу оформить заявку и отправить в банки прямо сейчас.
            <div className="time">12:44</div>
          </div>
        </div>

        <div className="chat-input">
          <div className="input-row">
            <input placeholder="Введите сообщение..." />
            <button type="button" className="send" title="Отправить">
              <IconSend />
            </button>
          </div>
          <p className="hint">
            Это демонстрационный прототип. Сообщения не отправляются. Для оформления заявки
            перейдите в раздел <Link to="/credit">Кредит</Link>.
          </p>
        </div>
      </div>
    </section>
  </DrivePageShell>
);

export default ChatsPage;
