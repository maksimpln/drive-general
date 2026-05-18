import { StubPageComponent } from "@components/stub-page";

export const TestDrivePage = () => (
  <StubPageComponent
    breadcrumbLabel="Тест-драйв"
    title="Запись на тест-драйв"
    description="Выберите автомобиль в каталоге и запишитесь на пробную поездку в удобное время."
    features={[
      "Выбор даты и времени",
      "Подтверждение менеджером",
      "Напоминание перед визитом",
    ]}
  />
);

export default TestDrivePage;
