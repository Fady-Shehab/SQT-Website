import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

/**
 * Variants for the Button component matching the design system.
 * - `primary` → gold gradient (`.btn-gold`)
 * - `secondary` → outline style (`.btn-outline`)
 * - `text` → link-style text button (`.btn-text`)
 * - `icon` → icon-only button (`.btn-icon`)
 * - `brand` → brand/social icon button
 */
type ButtonVariant = "primary" | "secondary" | "text" | "icon" | "brand";

/**
 * Size presets for the Button component.
 */
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Icon or element to render before the label */
  startIcon?: ReactNode;
  /** Icon or element to render after the label */
  endIcon?: ReactNode;
  /** Additional class names */
  className?: string;
  /** Children content */
  children?: ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Render as an anchor tag */
  as?: "button";
}

interface ButtonAsLink extends ButtonBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  as: "a";
  /** Link destination */
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "btn btn-gold",
  secondary: "btn btn-outline",
  text: "btn-text",
  icon: "btn-icon",
  brand: "social-a",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

/**
 * Reusable Button component.
 *
 * Renders either a `<button>` (default) or an `<a>` tag when `as="a"`.
 * Supports the full design-system variant palette: primary, secondary,
 * text, icon, and brand.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>انقر هنا</Button>
 * <Button as="a" href="/team" variant="secondary" startIcon={<Arrow />}>تعرف على الفريق</Button>
 * ```
 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "primary",
    size = "md",
    startIcon,
    endIcon,
    className = "",
    children,
    ...rest
  } = props;

  const classes = [VARIANTS[variant], SIZES[size], className].filter(Boolean).join(" ");

  const content = (
    <>
      {startIcon}
      {children && <span className="btn-text">{children}</span>}
      {endIcon}
    </>
  );

  if (props.as === "a") {
    const { as: _, startIcon: __, endIcon: ___, variant: ____, size: _____, ...anchorRest } = rest as ButtonAsLink & Record<string, unknown>;
    return (
      <a className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  const { as: _, startIcon: __, endIcon: ___, variant: ____, size: _____, ...buttonRest } = rest as ButtonAsButton & Record<string, unknown>;
  return (
    <button className={classes} {...buttonRest}>
      {content}
    </button>
  );
};

export default Button;
