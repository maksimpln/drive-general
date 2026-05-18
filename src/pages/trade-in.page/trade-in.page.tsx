import { StubPageComponent } from "@components/stub-page";

export const TradeInPage = () => (
  <StubPageComponent
    breadcrumbLabel="Трейд-ин"
    title="Трейд-ин"
    description="Оцените свой автомобиль онлайн и зачтите его стоимость при покупке нового. Быстрая предварительная оценка и запись на осмотр."
    features={[
      "Предварительная оценка по VIN и параметрам",
      "Запись на осмотр в салон",
      "Зачёт стоимости в сделку или первый взнос",
    ]}
  />
);

export default TradeInPage;
