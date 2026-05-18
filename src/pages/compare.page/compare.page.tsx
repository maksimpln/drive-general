import { StubPageComponent } from "@components/stub-page";

export const ComparePage = () => (
  <StubPageComponent
    breadcrumbLabel="Сравнение"
    title="Сравнение автомобилей"
    description="Добавьте до трёх автомобилей из каталога и сравните характеристики, цену и условия кредита в одной таблице."
    features={[
      "Сравнение характеристик и комплектации",
      "Сравнение цены и платежа в кредит",
      "Сохранение списка сравнения",
    ]}
  />
);

export default ComparePage;
