import { PropsWithChildren } from "react";
import COLORS from "src/colors";
import styled from "styled-components";

const Tag = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 7px 12px 6px 12px;

  background-color: ${COLORS.ivory};

  border-radius: 5px;

  font: normal 16px;
  color: ${COLORS.dark};
`;

export default Tag;
