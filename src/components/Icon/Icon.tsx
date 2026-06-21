import type { CSSProperties } from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Icon({ name, size = 24, className = '', style }: IconProps) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      style={style}
    />
  );
}
