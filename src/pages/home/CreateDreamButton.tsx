import { useNavigate } from "react-router-dom";
import Icons from "src/assets/Icons";
import COLORS, { GOLD_GRADIENT, HOVER_SCALE_ANIMATION } from "src/colors";
import Paths from "src/paths";
import styled from "styled-components";

const CreateDreamButton = () => {
  const navigator = useNavigate();

  return (
    <Button
      onClick={() => {
        navigator(Paths.WRITE);
      }}
    >
      <Icons.Dream size="20px" />
      <span>{"꿈 추가하기"}</span>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  height: min-content;
  ${GOLD_GRADIENT}
  border-radius: 10px;

  cursor: pointer;
  border: none;

  span {
    color: ${COLORS.dark};
    font-weight: bold;
  }

  ${HOVER_SCALE_ANIMATION}
`;

export default CreateDreamButton;
