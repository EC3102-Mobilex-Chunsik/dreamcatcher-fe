import COLORS, { GOLD_GRADIENT } from "src/colors";
import styled, { keyframes } from "styled-components";

interface AreaProps {
  $isCenter?: boolean;
}

const Area = styled.div<AreaProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${COLORS.dark};

  width: 100vw;
  height: 100vh;

  overflow-y: scroll;

  ${(props) => props.$isCenter && "justify-content: center;"}
`;

const GOLD_GRADIENT_KEYFRAMES = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GoldenArea = styled(Area)`
  background: linear-gradient(
    45deg,
    ${COLORS.gold},
    ${COLORS.cream},
    ${COLORS.gold}
  );
  background-size: 400% 400%;
  animation: ${GOLD_GRADIENT_KEYFRAMES} 10s ease infinite;
`;

export default Area;
