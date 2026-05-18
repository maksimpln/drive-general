import { Link } from "react-router-dom";
import type { Car } from "@data/cars";

interface CarCardProps {
  car: Car;
}

export const CarCardComponent = ({ car }: CarCardProps) => (
  <article className="car">
    <Link to={`/car/${car.id}`} className="car-link">
      <div className="car-img" style={{ backgroundImage: `url('${car.image}')` }}>
        <span className={`badge${car.badgeRed ? " badge--red" : ""}`}>{car.badge}</span>
        <span className={`car-condition car-condition--${car.condition}`}>
          {car.condition === "new" ? "Новый" : "С пробегом"}
        </span>
      </div>
      <div className="car-body">
        <h3 className="car-title">{car.fullTitle}</h3>
        <div className="car-meta">
          <span>{car.meta[0]}</span>
          <span>{car.meta[1]}</span>
        </div>
        {car.mileage != null && (
          <div className="car-mileage">{car.mileage.toLocaleString("ru-RU")} км</div>
        )}
        <div className="car-price">{car.priceFormatted}</div>
      </div>
    </Link>
    <div className="car-actions">
      <Link to={`/car/${car.id}`}>Открыть</Link>
      <Link to="/credit" className="gold">
        В кредит
      </Link>
    </div>
  </article>
);
