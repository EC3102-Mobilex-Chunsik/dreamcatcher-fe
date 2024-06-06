import COLORS from "src/colors";
import Spacer from "src/components/spacer/Spacer";
import Tag from "src/components/tag/Tag";
import styled from "styled-components";

interface ThumbnailCardProps {
  image: string;
  tags: string[];
  disabled?: boolean;
  title?: string;

  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ThumbnailCard = ({
  image,
  tags,
  title,
  value,
  onChange,
  disabled,
}: ThumbnailCardProps) => {
  return (
    <Wrapper>
      <Image src={image} alt={`Image of ${value}`} />

      <Spacer height="15px" />

      <DreamTitle
        defaultValue={title}
        onChange={onChange}
        disabled={disabled}
        value={value}
        type="text"
        placeholder="여기에 제목 입력"
      />

      <Spacer height="10px" />

      <Description>제목을 탭하여 수정할 수 있습니다.</Description>

      <Spacer height="20px" />

      <TagWrapper>
        {tags.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 100%;
  background-color: ${COLORS.greyDark};
  border-radius: 15px;
  padding: 40px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const DreamTitle = styled.input`
  background-color: transparent;
  border: none;
  font-weight: bolder;
  color: ${COLORS.white};
  font-size: 24px;
  text-align: center;

  width: 100%;

  :placeholder {
    color: ${COLORS.grey};
  }
`;

// const DreamTitle = styled.h2`
//   font-weight: bolder;
//   color: ${COLORS.white};

//   font-size: 24px;
// `;

const TagWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  gap: 7px;
`;

const Description = styled.p`
  font: 14px;
  color: ${COLORS.grey};
`;

export default ThumbnailCard;
