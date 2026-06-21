import type { ReactNode } from "react";

interface ValueCardProps {
  /** Icon element */
  icon: ReactNode;
  /** Card title */
  title: string;
  /** Description text */
  description: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Additional class names */
  className?: string;
}

/**
 * Value/culture card used in the Team page for displaying core values.
 *
 * @example
 * ```tsx
 * <ValueCard
 *   icon={<LightbulbIcon />}
 *   title="الابتكار"
 *   description="نسعى دائماً لتجاوز الحدود"
 * />
 * ```
 */
const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  className = "",
}) => {
  return (
    <article
      className={`value-card reveal ${className}`.trim()}
      role="listitem"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      <div className="value-icon">{icon}</div>
      <h3 className="value-title">{title}</h3>
      <p className="value-desc">{description}</p>
    </article>
  );
};

export default ValueCard;
