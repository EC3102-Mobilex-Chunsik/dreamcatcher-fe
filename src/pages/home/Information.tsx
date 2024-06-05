import ChunsikImage from "src/assets/Chunsik.png";
import COLORS from "src/colors";
import Spacer from "src/components/spacer/Spacer";
import styled from "styled-components";

const Information = () => {
  return (
    <Wrapper>
      <img
        src={ChunsikImage}
        alt="Chunsik"
        width="100px"
        style={{ marginBottom: "-10px" }}
      />

      <Description>EC3102 MobileX Project - Team Chunsik</Description>

      <Spacer height="5px" />

      <Description>이재희 이정우 손희경</Description>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.p`
  font: 14px;
  color: ${COLORS.grey};
`;

export default Information;
