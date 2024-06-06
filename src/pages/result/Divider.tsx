import Icons from "src/assets/Icons";

interface DividerProps {
  $fill?: React.CSSProperties["fill"];
}

const Divider = ({ $fill }: DividerProps) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "35px 0",
        display: "flex",
        gap: "4px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icons.Star size="18px" fill={$fill} />
      <Icons.Star fill={$fill} />
      <Icons.Star size="18px" fill={$fill} />
    </div>
  );
};

export default Divider;
