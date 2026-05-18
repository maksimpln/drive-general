import { StubPageComponent } from "@components/stub-page";

export const AiChatPage = () => (
  <StubPageComponent
    breadcrumbLabel="AI-помощник"
    title="AI-помощник подбора"
    description="Умный помощник подберёт автомобиль по бюджету, стилю жизни и предпочтениям — задайте вопрос в свободной форме."
    features={[
      "Подбор по бюджету и классу",
      "Рекомендации похожих моделей",
      "Ответы на вопросы о комплектации",
    ]}
  />
);

export default AiChatPage;
