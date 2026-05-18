import { Link } from "react-router-dom";
import { DrivePageShell } from "@components/drive-layout";
import { DriveButtonComponent } from "@components/drive-button";
import { BreadcrumbsComponent } from "@components/breadcrumbs";

interface StubPageProps {
  title: string;
  description: string;
  breadcrumbLabel: string;
  features?: string[];
}

export const StubPageComponent = ({
  title,
  description,
  breadcrumbLabel,
  features = [],
}: StubPageProps) => (
  <DrivePageShell className="page-stub">
    <BreadcrumbsComponent
      items={[
        { label: "Главная", to: "/" },
        { label: "Каталог", to: "/catalog" },
        { label: breadcrumbLabel },
      ]}
    />

    <section className="stub">
      <span className="stub-badge">В разработке</span>
      <h1>{title}</h1>
      <p className="stub-desc">{description}</p>

      {features.length > 0 && (
        <ul className="stub-features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      <p className="stub-note">
        Раздел появится в ближайших обновлениях. Пока вы можете воспользоваться каталогом,
        кредитным калькулятором и чатом с менеджером.
      </p>

      <div className="stub-actions">
        <DriveButtonComponent to="/catalog" variant="gold">
          Перейти в каталог
        </DriveButtonComponent>
        <DriveButtonComponent to="/chat">Чат с менеджером</DriveButtonComponent>
        <Link to="/catalog" className="stub-back">
          ← Назад
        </Link>
      </div>
    </section>
  </DrivePageShell>
);
