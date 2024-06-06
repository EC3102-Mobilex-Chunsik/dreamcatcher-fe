import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getDreams } from "src/api/dreams/dreams";
import COLORS, { HOVER_SCALE_ANIMATION } from "src/colors";
import Area from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import Paths from "src/paths";
import styled from "styled-components";

import CreateDreamButton from "./CreateDreamButton";
import DreamRecordCard from "./DreamRecordCard";
import Information from "./Information";

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["dreams"],
    queryFn: getDreams,
  });

  return (
    <Area>
      <Main>
        <Header>
          <Title>내 꿈들</Title>

          <CreateDreamButton />
        </Header>

        {data && (
          <>
            <DreamRecordWrapper>
              {data.map((item) => (
                <Link to={`${Paths.DETAIL}/${item.id}`} key={item.id}>
                  <DreamRecordAnimationWrapper>
                    <DreamRecordCard
                      key={item.id}
                      title={item.title}
                      tags={item.factors.map((factor) => factor.tagName)}
                      date={item.dateTime}
                      image={`https://picsum.photos/300?random=${item.id}`}
                    />
                  </DreamRecordAnimationWrapper>
                </Link>
              ))}
            </DreamRecordWrapper>
            <Spacer height="200px" />
            <Information />
          </>
        )}

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

const DreamRecordAnimationWrapper = styled.div`
  ${HOVER_SCALE_ANIMATION}
`;

const DreamRecordWrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 16px;
  width: 100%;
`;

export default HomePage;
