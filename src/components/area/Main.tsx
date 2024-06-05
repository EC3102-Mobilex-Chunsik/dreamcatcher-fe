import styled from "styled-components";

interface MainProps {
  $width?: React.CSSProperties["width"];
  $paddingTop?: React.CSSProperties["paddingTop"];
}

const Main = styled.main<MainProps>`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.$width ?? "700px"};
  padding-top: ${(props) => props.$paddingTop ?? "70px"};
`;

export default Main;
