import Icons from "src/assets/Icons";
import COLORS from "src/colors";
import Spacer from "src/components/spacer/Spacer";
import styled from "styled-components";

interface DescriptionCardProps {
  title: string;
  description: string;
}

const DescriptionCard = ({ title, description }: DescriptionCardProps) => {
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Icons.Dream fill={COLORS.gold} size="36px" className="dreamIcon" />

        <Title>{title}</Title>
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

  &:hover {
    .dreamIcon {
      transform: rotate(360deg);
      transition: transform 0.5s;
    }
  }
`;

const Title = styled.h3`
  margin: 0;
  font: 22px bold;
  color: ${COLORS.ivory};
  background-color: ${COLORS.ivory}10;

  padding: 8px 14px 6px 14px;
  border-radius: 5px;
`;

export const Content = styled.p`
  font: 18px 400;
  line-height: 1.5;
  color: ${COLORS.white};
`;

export default DescriptionCard;
