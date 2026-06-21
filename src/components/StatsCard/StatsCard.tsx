import type { ReactNode } from "react";

interface StatsCardProps {
  /** The numeric value to display */
  value: number | string;
  /** Label below the number */
  label: string;
  /** Optional suffix character (e.g. "+", "×") */
  suffix?: string;
  /** Icon or element to render */
  icon?: ReactNode;
  /** Animation delay in seconds (e.g. 0.1) */
  delay?: number;
  /** Whether to animate the number counting up */
  animate?: boolean;
  /** Additional class names */
  className?: string;
}

/**
 * Statistics display card used across Home, Team, and Projects pages.
 *
 * @example
 * ```tsx
 * <StatsCard value={26} label="عضو في الفريق" suffix="+" animate />
 * ```
 */
const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  suffix,
  icon,
  delay = 0,
  animate = false,
  className = "",
}) => {
  return (
    <div
      className={`stat-cell reveal ${className}`.trim()}
      role="listitem"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {icon && <div className="stat-icon">{icon}</div>}
      <div className="stat-num">
        <span
          className={animate ? "counter" : undefined}
          data-target={animate ? String(value) : undefined}
        >
          {value}
        </span>
        {suffix && <span className="stat-suf">{suffix}</span>}
      </div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
};

export default StatsCard;
