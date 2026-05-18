import { Fragment } from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbsComponent = ({ items }: BreadcrumbsProps) => (
  <div className="crumbs">
    {items.map((item, index) => (
      <Fragment key={`${item.label}-${index}`}>
        {index > 0 && <span>›</span>}
        {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
      </Fragment>
    ))}
  </div>
);
