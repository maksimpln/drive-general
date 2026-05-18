import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconChat, IconClose, IconCredit, IconMenu, IconProfile } from "../drive-icons/icons";
import { DriveIconButtonComponent } from "../drive-button";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
  soon?: boolean;
};

const navItems: NavItem[] = [
  { to: "/catalog", label: "Каталог" },
  { to: "/credit", label: "Кредит" },
  { to: "/trade-in", label: "Трейд-ин", soon: true },
  { to: "/test-drive", label: "Тест-драйв", soon: true },
  { to: "/compare", label: "Сравнение", soon: true },
  { to: "/ai-chat", label: "AI-чат", soon: true },
];

export const DriveHeaderComponent = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <header className={`dg-header${navOpen ? " dg-header--nav-open" : ""}`}>
      <div className="container">
        <div className="nav">
          <NavLink to="/" className="logo" end>
            <span className="logo-dot" />
            <span>DriveGeneral</span>
          </NavLink>

          <nav className="menu" id="dg-main-nav">
            {navItems.map(({ to, label, end, soon }) => (
              <NavLink key={to} to={to} end={end ?? false} onClick={() => setNavOpen(false)}>
                {label}
                {soon && <span className="menu-soon">Скоро</span>}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <DriveIconButtonComponent to="/profile" title="Личный кабинет">
              <IconProfile />
            </DriveIconButtonComponent>
            <DriveIconButtonComponent to="/chat" title="Чат">
              <IconChat />
            </DriveIconButtonComponent>
            <DriveIconButtonComponent to="/credit" title="Кредит">
              <IconCredit />
            </DriveIconButtonComponent>
            <button
              type="button"
              className="nav-burger"
              aria-expanded={navOpen}
              aria-controls="dg-main-nav"
              aria-label={navOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setNavOpen((open) => !open)}
            >
              {navOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
