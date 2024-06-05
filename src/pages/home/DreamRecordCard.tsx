import COLORS from "src/colors";
import Spacer from "src/components/spacer/Spacer";
import Tag from "src/components/tag/Tag";
import formatDate from "src/utils/formatDate";
import styled from "styled-components";

export interface DreamRecordCardProps {
  title: string;
  tags: string[];
  date: Date;
  image: string;
}

const DreamRecordCard = ({
  title,
  tags,
  date,
  image,
}: DreamRecordCardProps) => {
  return (
    <Wrapper>
      <div>
        <DreamTitle>{title}</DreamTitle>

        <Spacer height="10px" />

        <TagWrapper>
          {tags.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </TagWrapper>

        <Spacer height="25px" />

        <Date>{formatDate(date)}</Date>
      </div>

      <DreamImage src={image} alt={`Image of ${title}`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.greyDark};
  width: 100%;
  border-radius: 15px;

  display: flex;
  gap: 18px;
  justify-content: space-between;

  padding: 18px;
`;

const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  gap: 7px;
`;

const DreamTitle = styled.h2`
  font-weight: bolder;
  color: ${COLORS.white};

  font-size: 24px;
`;

const DreamImage = styled.img`
  width: 112px;
  height: 112px;

  object-fit: cover;
  border-radius: 10px;
`;

const Date = styled.span`
  color: ${COLORS.grey};

  font: 14px;
`;

export default DreamRecordCard;
