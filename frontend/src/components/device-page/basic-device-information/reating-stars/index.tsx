import React, {useState} from 'react';

interface RatingProps {
  className?: string;
  count: number;
  value: number;
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  size?: number;
  edit?: boolean;
  isHalf?: boolean;
  onChange?: (value: number) => void;
  emptyIcon?: React.ReactElement;
  halfIcon?: React.ReactElement;
  fullIcon?: React.ReactElement;
}

interface IconProps {
  size?: number;
  color?: string;
}

const FullStar = ({ size = 24, color = "#000000" }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const HalfStar = ({ size = 24, color = "#000000" }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const EmptyStar = ({ size = 24, color = "#000000" }: IconProps) => {
  return (
    <div style={{ color: color }}>
      <svg height={size} viewBox="0 0 24 24">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
          fill="currentColor"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const Rating: React.FC<RatingProps> = ({
  className,
  count,
  value,
  color = "var(--color-white-text)",
  // hoverColor = "var(--color-white-text)",
  activeColor = "var(--color-white-text)",
  size = 20,
  isHalf = true,
  emptyIcon = <EmptyStar />,
  halfIcon = <HalfStar />,
  fullIcon = <FullStar />
}) => {
  const roundValue = Math.round(value * 2) / 2;
  
  const stars = [];

  for (let i = 0; i < count; i++) {
    let star: React.ReactElement;
    if (isHalf && roundValue - i === 0.5) {
      star = halfIcon;
    } else if (i < roundValue) {
      star = fullIcon;
    } else {
      star = emptyIcon;
    }

    stars.push(
      <div key={i}>
        {React.cloneElement(star, {
          size: size,
          color: i < roundValue ? activeColor : color,
        })}
      </div>
    );
  }

 return (
  <div className="">
    <div className={`rating ${className}`}>{stars}</div>
  </div>
 );
};

export default Rating;