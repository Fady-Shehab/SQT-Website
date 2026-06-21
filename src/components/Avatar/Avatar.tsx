interface AvatarProps {
  /** Image URL for the avatar */
  src?: string;
  /** User's name (used for initials fallback) */
  name: string;
  /** Size in pixels (default 40) */
  size?: number;
  /** Additional class names */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * User avatar — renders an image if available, otherwise shows initials.
 *
 * @example
 * ```tsx
 * <Avatar name="محمد أحمد" src="https://..." size={48} />
 * <Avatar name="أحمد علي" />
 * ```
 */
const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 40,
  className = "",
  onClick,
}) => {
  const initial = name.trim().charAt(0);
  const isClickable = !!onClick;

  return (
    <div
      className={`avatar-ring ${className}`.trim()}
      style={{ width: size, height: size }}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="avatar-img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const parent = (e.currentTarget as HTMLImageElement)
              .parentElement as HTMLElement | null;
            if (parent) {
              const ini = parent.querySelector(
                ".avatar-initials"
              ) as HTMLElement | null;
              if (ini) ini.style.display = "flex";
            }
          }}
        />
      ) : null}
      <div
        className="avatar-initials"
        style={{
          display: src ? "none" : "flex",
          width: "100%",
          height: "100%",
        }}
        aria-hidden="true"
      >
        {initial}
      </div>
    </div>
  );
};

export default Avatar;
