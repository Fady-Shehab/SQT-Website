import type { ReactNode } from "react";
import { Icon } from "@/components";

/** A single breadcrumb item */
export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Link href — omit or set to `undefined` for the current page */
  href?: string;
}

interface BreadcrumbProps {
  /** Ordered list of breadcrumb items (last = current page) */
  items: BreadcrumbItem[];
  /** Additional class names */
  className?: string;
  /** Custom separator element */
  separator?: ReactNode;
}

const DefaultSeparator = (
  <Icon name="chevron-left" size={14} />
);

/**
 * Breadcrumb navigation component following the site's design.
 *
 * @example
 * ```tsx
 * <Breadcrumb items={[
 *   { label: "الرئيسية", href: "/" },
 *   { label: "المشاريع", href: "/projects" },
 *   { label: "المشروع الحالي" },
 * ]} />
 * ```
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = "",
  separator = DefaultSeparator,
}) => {
  return (
    <nav className={`breadcrumb ${className}`.trim()} aria-label="مسار التنقل">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            {index > 0 && separator}
            {item.href && !isLast ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span className={isLast ? "current" : undefined}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
