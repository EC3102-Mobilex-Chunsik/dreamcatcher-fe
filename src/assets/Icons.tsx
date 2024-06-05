import COLORS from "src/colors";

export interface IconProps {
  size?: React.CSSProperties["width"];
  fill?: React.CSSProperties["fill"];
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Icons = ({ size, fill, onClick, style, className }: IconProps) => {
  return;
};

const Dream = ({
  size = "65px",
  fill = COLORS.dark,
  onClick,
  style,
  className,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      style={style}
      className={className}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 5L35.3457 29.6543L60 35L35.3457 40.3457L30 65L24.6543 40.3457L0 35L24.6543 29.6543L30 5Z"
        fill={fill}
      />
      <path
        d="M53 0L55.1383 9.86171L65 12L55.1383 14.1383L53 24L50.8617 14.1383L41 12L50.8617 9.86171L53 0Z"
        fill={fill}
      />
    </svg>
  );
};

const Star = ({
  size = "35px",
  fill = COLORS.dark,
  onClick,
  style,
  className,
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      onClick={onClick}
      style={style}
      className={className}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 0L21.1183 14.3817L35.5 17.5L21.1183 20.6183L18 35L14.8817 20.6183L0.5 17.5L14.8817 14.3817L18 0Z"
        fill={fill}
      />
    </svg>
  );
};

Icons.Dream = Dream;
Icons.Star = Star;

export default Icons;
