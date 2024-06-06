import { Link } from "react-router-dom";
import Icons from "src/assets/Icons";
import COLORS from "src/colors";
import Paths from "src/paths";

const GoBackButton = () => {
  return (
    <Link to={Paths.HOME}>
      <div
        style={{ display: "flex", alignItems: "center", width: "fit-content" }}
      >
        <Icons.Arrow />
        <span
          style={{
            color: COLORS.ivory,
            fontSize: "20px",
          }}
        >
          뒤로
        </span>
      </div>
    </Link>
  );
};

export default GoBackButton;
