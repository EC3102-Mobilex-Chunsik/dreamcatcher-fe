import Icons from "src/assets/Icons";

const Divider = () => {
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
      <Icons.Star size="18px" />
      <Icons.Star />
      <Icons.Star size="18px" />
    </div>
  );
};

export default Divider;
