import { css } from "styled-components";

const COLORS = {
  dark: "#252525",
  white: "#ffffff",
  greyDark: "#313131",
  grey: "#919191",
  ivory: "#FFFAC0",

  gold: "#FFD700",
  cream: "#FFFFE0",
};

export const GOLD_GRADIENT = css`
  background: linear-gradient(90deg, ${COLORS.gold}, ${COLORS.cream});
`;

export const HOVER_SCALE_ANIMATION = css`
  &:hover {
    transform: scale(1.1);
  }

  transition: 0.2s;
`;

export default COLORS;
