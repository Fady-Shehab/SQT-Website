import type { ReactNode } from "react";

/**
 * Badge color variants matching the design system.
 * - `gold` → completed / top-tier
 * - `green` → active / success
 * - `silver` → in-progress / neutral
 */
type BadgeVariant = "gold" | "green" | "silver";

interface BadgeProps {
  /** Color variant */
  variant?: BadgeVariant;
  /** Additional class names */
  className?: string;
  /** Badge text content */
  children: ReactNode;
}

const VARIANT_MAP: Record<BadgeVariant, string> = {
  gold: "badge badge-gold",
  green: "badge badge-green",
  silver: "badge badge-silver",
};

/**
 * Small status badge.
 *
 * @example
 * ```tsx
 * <Badge variant="gold">مكتمل</Badge>
 * ```
 */
const Badge: React.FC<BadgeProps> = ({ variant = "silver", className = "", children }) => {
  return <span className={`${VARIANT_MAP[variant]} ${className}`.trim()}>{children}</span>;
};

export default Badge;
