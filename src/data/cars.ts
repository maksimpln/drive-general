export type CarCondition = "new" | "used";

export interface CarHistoryItem {
  label: string;
  value: string;
}

export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  fullTitle: string;
  year: number;
  condition: CarCondition;
  price: number;
  priceFormatted: string;
  monthlyPayment?: number;
  badge: string;
  badgeRed?: boolean;
  image: string;
  images: string[];
  engine: string;
  power: string;
  consumption: string;
  transmission: string;
  mileage?: number;
  color: string;
  drive: string;
  equipment: string[];
  history?: CarHistoryItem[];
  meta: [string, string];
}

export const CARS: Car[] = [
  {
    id: "bmw-5-2024",
    slug: "bmw-5-2024",
    brand: "BMW",
    model: "5 серия",
    fullTitle: "BMW 5 серия 2024",
    year: 2024,
    condition: "new",
    price: 6450000,
    priceFormatted: "6 450 000 ₽",
    monthlyPayment: 92500,
    badge: "Новинка",
    image:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    ],
    engine: "2.0 л",
    power: "184 л.с.",
    consumption: "8.1 л / 100",
    transmission: "Автомат",
    mileage: 32000,
    color: "Чёрный металлик",
    drive: "Задний",
    equipment: [
      "Светодиодные фары (LED)",
      "Кожаный салон премиум-класса",
      "Панорамная крыша",
      "Климат-контроль 2-зонный",
      "Парктроники + камера заднего вида",
      "Подогрев сидений и руля",
    ],
    history: [
      { label: "ДТП", value: "Не обнаружено" },
      { label: "Залог", value: "Не обнаружено" },
      { label: "Ограничения", value: "Не обнаружено" },
      { label: "Владельцы", value: "1 владелец" },
      { label: "Юридическая чистота", value: "100%" },
    ],
    meta: ["2024 • 2.0", "Автомат"],
  },
  {
    id: "mercedes-glc-2023",
    slug: "mercedes-glc-2023",
    brand: "Mercedes-Benz",
    model: "GLC",
    fullTitle: "Mercedes-Benz GLC 2023",
    year: 2023,
    condition: "used",
    price: 5890000,
    priceFormatted: "5 890 000 ₽",
    monthlyPayment: 84500,
    badge: "Хит",
    badgeRed: true,
    image:
      "https://images.unsplash.com/photo-1616789916188-3f0a70d7c7b7?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1616789916188-3f0a70d7c7b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
    ],
    engine: "2.0 л",
    power: "197 л.с.",
    consumption: "8.4 л / 100",
    transmission: "Автомат",
    mileage: 41000,
    color: "Белый",
    drive: "Полный",
    equipment: ["MBUX", "Камера 360°", "Подогрев сидений", "Панорамная крыша"],
    history: [
      { label: "ДТП", value: "Не обнаружено" },
      { label: "Залог", value: "Не обнаружено" },
      { label: "Владельцы", value: "2 владельца" },
    ],
    meta: ["2023 • 2.0", "Автомат"],
  },
  {
    id: "audi-q5-2024",
    slug: "audi-q5-2024",
    brand: "Audi",
    model: "Q5",
    fullTitle: "Audi Q5 2024",
    year: 2024,
    condition: "new",
    price: 5500000,
    priceFormatted: "5 500 000 ₽",
    monthlyPayment: 79000,
    badge: "Новый",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c8?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c8?auto=format&fit=crop&w=800&q=80",
    ],
    engine: "2.0 л",
    power: "190 л.с.",
    consumption: "7.9 л / 100",
    transmission: "Автомат",
    mileage: 12000,
    color: "Серый",
    drive: "Полный",
    equipment: ["Virtual Cockpit", "Матричные фары", "ACC"],
    meta: ["2024 • 2.0", "Автомат"],
  },
  {
    id: "hyundai-santafe-2023",
    slug: "hyundai-santafe-2023",
    brand: "Hyundai",
    model: "Santa Fe",
    fullTitle: "Hyundai Santa Fe 2023",
    year: 2023,
    condition: "used",
    price: 4150000,
    priceFormatted: "4 150 000 ₽",
    monthlyPayment: 59500,
    badge: "В наличии",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
    ],
    engine: "2.2 л",
    power: "200 л.с.",
    consumption: "8.8 л / 100",
    transmission: "Автомат",
    mileage: 58000,
    color: "Синий",
    drive: "Полный",
    equipment: ["7 мест", "Подогрев руля", "Камера заднего вида"],
    history: [
      { label: "ДТП", value: "Не обнаружено" },
      { label: "Владельцы", value: "1 владелец" },
    ],
    meta: ["2023 • 2.2", "Автомат"],
  },
  {
    id: "lexus-rx-2022",
    slug: "lexus-rx-2022",
    brand: "Lexus",
    model: "RX",
    fullTitle: "Lexus RX 2022",
    year: 2022,
    condition: "used",
    price: 6200000,
    priceFormatted: "6 200 000 ₽",
    monthlyPayment: 89000,
    badge: "Премиум",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    ],
    engine: "3.5 л",
    power: "300 л.с.",
    consumption: "9.2 л / 100",
    transmission: "Автомат",
    mileage: 45000,
    color: "Белый перламутр",
    drive: "Полный",
    equipment: ["Mark Levinson", "Панорама", "Вентиляция сидений"],
    history: [
      { label: "ДТП", value: "Не обнаружено" },
      { label: "Юридическая чистота", value: "100%" },
    ],
    meta: ["2022 • 3.5", "Автомат"],
  },
  {
    id: "porsche-macan-2024",
    slug: "porsche-macan-2024",
    brand: "Porsche",
    model: "Macan",
    fullTitle: "Porsche Macan 2024",
    year: 2024,
    condition: "new",
    price: 8900000,
    priceFormatted: "8 900 000 ₽",
    monthlyPayment: 128000,
    badge: "Новинка",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    ],
    engine: "2.0 л",
    power: "265 л.с.",
    consumption: "9.0 л / 100",
    transmission: "Автомат",
    mileage: 5000,
    color: "Красный",
    drive: "Полный",
    equipment: ["Sport Chrono", "BOSE", "Панорамная крыша"],
    meta: ["2024 • 2.0", "Автомат"],
  },
];

export const CAR_BRANDS = [...new Set(CARS.map((c) => c.brand))].sort();

export function getCarById(id: string): Car | undefined {
  return CARS.find((c) => c.id === id || c.slug === id);
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
