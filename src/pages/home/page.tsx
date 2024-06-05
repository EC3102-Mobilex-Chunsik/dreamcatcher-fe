import COLORS from "src/colors";
import Area from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import styled from "styled-components";

import CreateDreamButton from "./CreateDreamButton";
import DreamRecordCard, { DreamRecordCardProps } from "./DreamRecordCard";
import Information from "./Information";

const TEMP_RECORDS: (DreamRecordCardProps & { id: number })[] = [
  {
    id: 1,
    title: "나비 꿈",
    tags: ["나비", "몽환적", "포근"],
    date: new Date(),
    image: `https://picsum.photos/300?random=1`,
  },
  {
    id: 2,
    title: "교수님의 꾸짖음",
    tags: ["불안", "억울", "신비"],
    date: new Date(),
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "마라탕 모험",
    tags: ["모험", "마라탕", "맛있음", "케이크", "신비"],
    date: new Date(),
    image: "https://picsum.photos/300?random=3",
  },
];

const HomePage = () => {
  const data = TEMP_RECORDS;

  return (
    <Area>
      <Main>
        <Header>
          <Title>내 꿈들</Title>

          <CreateDreamButton />
        </Header>

        <DreamRecordWrapper>
          {data.map((item) => (
            <DreamRecordCard key={item.id} {...item} />
          ))}
        </DreamRecordWrapper>

        <Spacer height="200px" />

        <Information />

        <Spacer height="50px" />
      </Main>
    </Area>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

const Title = styled.h1`
  font-weight: bolder;
  font-size: 36px;
  color: ${COLORS.white};
`;

const DreamRecordWrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 16px;
  width: 100%;
`;

export default HomePage;
