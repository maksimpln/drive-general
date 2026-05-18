import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { DriveHeaderComponent } from "../drive-header";
import { DriveFooterComponent } from "../drive-footer";
import { FloatChatComponent } from "../float-chat";

export const DriveLayoutComponent = () => (
  <div className="drive-app">
    <DriveHeaderComponent />
    <main className="container">
      <Outlet />
    </main>
    <FloatChatComponent />
  </div>
);

export const DrivePageShell = ({
  className,
  children,
  footer = true,
}: {
  className: string;
  children: ReactNode;
  footer?: boolean;
}) => (
  <>
    <div className={className}>{children}</div>
    {footer && <DriveFooterComponent />}
  </>
);
