import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DrivePageShell } from "@components/drive-layout";
import { BreadcrumbsComponent } from "@components/breadcrumbs";
import { CarCardComponent } from "@components/car-card";
import { CAR_BRANDS, CARS, type CarCondition } from "@data/cars";

type ConditionFilter = "all" | CarCondition;

const QUICK_FILTERS: { id: string; label: string; condition?: ConditionFilter; brand?: string }[] = [
  { id: "all", label: "Все авто", condition: "all" },
  { id: "new", label: "Новые", condition: "new" },
  { id: "used", label: "С пробегом", condition: "used" },
  { id: "bmw", label: "BMW", brand: "BMW" },
  { id: "mercedes", label: "Mercedes", brand: "Mercedes-Benz" },
  { id: "premium", label: "от 6 млн ₽" },
];

const TOOL_LINKS = [
  {
    to: "/trade-in",
    title: "Трейд-ин",
    desc: "Оценка вашего авто и зачёт в сделку",
    dev: true,
  },
  {
    to: "/test-drive",
    title: "Тест-драйв",
    desc: "Запись на пробную поездку",
    dev: true,
  },
  {
    to: "/compare",
    title: "Сравнение",
    desc: "Сравните до 3 автомобилей",
    dev: true,
  },
  {
    to: "/ai-chat",
    title: "AI-помощник",
    desc: "Подбор авто по вашим критериям",
    dev: true,
  },
];

export const CatalogPage = () => {
  const [condition, setCondition] = useState<ConditionFilter>("all");
  const [brand, setBrand] = useState<string>("");
  const [search, setSearch] = useState("");
  const [activeQuick, setActiveQuick] = useState("all");
  const [minPrice, setMinPrice] = useState("");

  const filtered = useMemo(() => {
    let list = [...CARS];

    if (condition !== "all") {
      list = list.filter((c) => c.condition === condition);
    }
    if (brand) {
      list = list.filter((c) => c.brand === brand);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.fullTitle.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q) ||
          c.model.toLowerCase().includes(q),
      );
    }
    if (minPrice === "premium") {
      list = list.filter((c) => c.price >= 6_000_000);
    }

    return list;
  }, [condition, brand, search, minPrice]);

  const applyQuick = (id: string) => {
    setActiveQuick(id);
    const q = QUICK_FILTERS.find((f) => f.id === id);
    if (!q) return;
    setCondition(q.condition ?? "all");
    setBrand(q.brand ?? "");
    setMinPrice(id === "premium" ? "premium" : "");
  };

  return (
    <DrivePageShell className="page-catalog">
      <BreadcrumbsComponent items={[{ label: "Главная", to: "/" }, { label: "Каталог" }]} />

      <header className="catalog-head">
        <div>
          <h1>Каталог автомобилей</h1>
          <p>Новые и автомобили с пробегом. Прозрачные цены, проверенная история.</p>
        </div>
        <div className="catalog-count">
          Найдено: <b>{filtered.length}</b>
        </div>
      </header>

      <section className="catalog-tools">
        {TOOL_LINKS.map((t) => (
          <Link key={t.to} to={t.to} className="tool-card">
            {t.dev && <span className="tool-card__dev">Скоро</span>}
            <b>{t.title}</b>
            <span>{t.desc}</span>
          </Link>
        ))}
      </section>

      <section className="catalog-filters panel panel-pad">
        <div className="filter-row filter-row--quick">
          <span className="filter-label">Быстрые фильтры</span>
          <div className="chips">
            {QUICK_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`chip${activeQuick === f.id ? " chip--active" : ""}`}
                onClick={() => applyQuick(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-row filter-grid">
          <div className="field">
            <label>Поиск</label>
            <input
              className="dg-input"
              placeholder="Марка, модель..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Состояние</label>
            <select
              className="dg-select"
              value={condition}
              onChange={(e) => {
                setCondition(e.target.value as ConditionFilter);
                setActiveQuick("");
              }}
            >
              <option value="all">Все</option>
              <option value="new">Новые</option>
              <option value="used">С пробегом</option>
            </select>
          </div>
          <div className="field">
            <label>Марка</label>
            <select
              className="dg-select"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                setActiveQuick("");
              }}
            >
              <option value="">Все марки</option>
              {CAR_BRANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <div className="catalog-empty panel panel-pad">
          <p>По вашему запросу ничего не найдено. Попробуйте изменить фильтры.</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setCondition("all");
              setBrand("");
              setSearch("");
              setMinPrice("");
              setActiveQuick("all");
            }}
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <section className="grid catalog-grid">
          {filtered.map((car) => (
            <CarCardComponent key={car.id} car={car} />
          ))}
        </section>
      )}
    </DrivePageShell>
  );
};

export default CatalogPage;
