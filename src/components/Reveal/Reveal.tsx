import type { ReactNode } from "react";

interface RevealProps {
  /** Content to animate in on scroll */
  children: ReactNode;
  /** Animation delay in seconds */
  delay?: number;
  /** HTML tag to render as wrapper (default "div") */
  as?: keyof JSX.IntrinsicElements;
  /** Additional class names */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

/**
 * Scroll-reveal wrapper that applies the `.reveal` class for
 * IntersectionObserver-driven fade-up animations.
 *
 * @example
 * ```tsx
 * <Reveal delay={0.1}>
 *   <p>This fades up on scroll</p>
 * </Reveal>
 * ```
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}) => {
  const classes = `reveal ${className}`.trim();

  return (
    <Tag
      className={classes}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
