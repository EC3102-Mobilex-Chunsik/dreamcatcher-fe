interface SpaceProps {
  width?: React.CSSProperties["width"];
  minWidth?: React.CSSProperties["minWidth"];
  height?: React.CSSProperties["height"];
  minHeight?: React.CSSProperties["minHeight"];
}

const Spacer = ({ width, minWidth, height, minHeight }: SpaceProps) => {
  return (
    <div
      style={{
        width: width || "100%",
        minWidth: minWidth,
        height: height || "100%",
        minHeight: minHeight,

        flex: `0 1 ${height}`,
      }}
    />
  );
};

export default Spacer;
