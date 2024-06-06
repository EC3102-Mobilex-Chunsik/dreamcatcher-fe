import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDream } from "src/api/dreams/dreams";
import Icons from "src/assets/Icons";
import COLORS from "src/colors";
import Area from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import formatDate from "src/utils/formatDate";
import styled from "styled-components";

import DescriptionCard from "../result/DescriptionCard";
import Divider from "../result/Divider";
import FactorCard from "../result/FactorCard";
import { FactorWrapper } from "../result/page";
import ThumbnailCard from "../result/ThumbnailCard";
import GoBackButton from "./GoBackButton";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["dream", id],
    queryFn: () => {
      if (!id) return null;
      return getDream(id);
    },
  });

  return (
    <Area>
      <Main>
        <GoBackButton />
        {data ? (
          <>
            <Title>{data.title}</Title>
            <div style={{ marginTop: "-20px" }}>
              <Description>{formatDate(data.dateTime)}</Description>
            </div>

            <Spacer height="35px" />

            <ThumbnailCard
              image={`https://picsum.photos/300?random=${id}`}
              tags={data.factors.map((factor) => factor.tagName)}
              value={data.title}
              disabled
            />

            <Spacer height="15px" />

            <DescriptionCard title="설명" description={data.context} />

            <Divider $fill={COLORS.ivory} />

            <FactorWrapper>
              {data.factors.map((item, index) => (
                <FactorCard
                  key={index}
                  factorName={item.tagName}
                  description={item.description}
                />
              ))}
            </FactorWrapper>

            <Divider $fill={COLORS.ivory} />

            <DescriptionCard
              title="입력한 원본"
              description={data.inputPrompt}
            />
          </>
        ) : (
          <Loading />
        )}

        <Spacer height="200px" />
      </Main>
    </Area>
  );
};

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Icons.Dream fill={COLORS.grey} />
      <Spacer height="15px" />
      <Description>로딩 중...</Description>
    </div>
  );
};

const Title = styled.h1`
  font-weight: bolder;
  font-size: 36px;
  color: ${COLORS.white};
`;

const Description = styled.p`
  font: 14px;
  color: ${COLORS.grey};
`;

export default DetailPage;
