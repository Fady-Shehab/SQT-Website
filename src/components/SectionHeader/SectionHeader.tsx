import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Small label above the title (`.stb-eye`) */
  eye?: string;
  /** Main heading text — use `<em>...</em>` for highlighted words */
  title: ReactNode;
  /** Optional subtitle paragraph */
  subtitle?: string;
  /** Whether to show the gold-rule divider */
  showRule?: boolean;
  /** Additional class names */
  className?: string;
}

/**
 * Standardised section header with the ".stb" pattern: eye label,
 * heading with optional `<em>` highlight, gold rule divider, and subtitle.
 *
 * @example
 * ```tsx
 * <SectionHeader
 *   eye="ما نبنيه"
 *   title={<>مشاريع <em>مميزة</em></>}
 *   subtitle="أبرز المشاريع التي يبنيها فريقنا"
 * />
 * ```
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  eye,
  title,
  subtitle,
  showRule = true,
  className = "",
}) => {
  return (
    <div className={`stb reveal ${className}`.trim()}>
      {eye && <div className="stb-eye">{eye}</div>}
      <h2 className="stb-h">{title}</h2>
      {showRule && (
        <div className="gold-rule">
          <div className="gold-rule-diamond"></div>
        </div>
      )}
      {subtitle && <p className="stb-sub">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
