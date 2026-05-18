import { Link, useLocation } from "react-router-dom";

export const FloatChatComponent = () => {
  const { pathname } = useLocation();

  if (pathname === "/chat") {
    return null;
  }

  return (
    <Link to="/chat" className="float-chat">
      <span className="dot" />
      <div>
        <div className="text">Чат с менеджером</div>
        <div className="sub">Онлайн 24/7</div>
      </div>
    </Link>
  );
};
