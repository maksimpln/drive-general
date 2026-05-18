import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type DriveButtonVariant = "default" | "gold";

interface DriveButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: DriveButtonVariant;
  className?: string;
  block?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const DriveButtonComponent = ({
  children,
  to,
  href,
  variant = "default",
  className = "",
  block = false,
  type = "button",
  onClick,
}: DriveButtonProps) => {
  const classes = [
    "btn",
    variant === "gold" ? "btn--gold" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

interface DriveSmallButtonProps {
  children: ReactNode;
  to: string;
  variant?: "default" | "gold";
}

export const DriveSmallButtonComponent = ({
  children,
  to,
  variant = "default",
}: DriveSmallButtonProps) => (
  <Link
    to={to}
    className={`small-btn${variant === "gold" ? " small-btn--gold" : ""}`}
  >
    {children}
  </Link>
);

interface DriveIconButtonProps {
  to: string;
  title: string;
  children: ReactNode;
}

export const DriveIconButtonComponent = ({
  to,
  title,
  children,
}: DriveIconButtonProps) => (
  <Link to={to} className="icon-btn" title={title}>
    {children}
  </Link>
);
