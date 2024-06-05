import COLORS from "src/colors";
import styled from "styled-components";

const SaveDreamButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 20px 0;
  background-color: ${COLORS.dark};
  gap: 10px;

  span {
    color: ${COLORS.ivory};
    font-weight: bold;
    font-size: 18px;
  }

  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export default SaveDreamButton;
