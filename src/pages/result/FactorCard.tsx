import COLORS from "src/colors";
import Spacer from "src/components/spacer/Spacer";
import Tag from "src/components/tag/Tag";
import styled from "styled-components";

import { Content } from "./DescriptionCard";

interface FactorCardProps {
  factorName: string;
  description: string;
}

const FactorCard = ({ factorName, description }: FactorCardProps) => {
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <h3 style={{ font: "16px normal", color: COLORS.ivory }}>요소</h3>
        <Tag>{factorName}</Tag>
      </div>

      <Spacer height="10px" />

      <Content>{description}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  flex-direction: column;

  width: 100%;
  background-color: ${COLORS.greyDark};
  border-radius: 15px;
  padding: 18px;
`;

export default FactorCard;
