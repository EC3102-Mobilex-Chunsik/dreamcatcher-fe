import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postDream } from "src/api/dreams/dreams";
import Icons from "src/assets/Icons";
import COLORS from "src/colors";
import { GoldenArea } from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import LocalstorageKeys from "src/localstorage";
import Paths from "src/paths";
import { DreamInstance } from "src/types";
import styled from "styled-components";

import DescriptionCard from "./DescriptionCard";
import Divider from "./Divider";
import FactorCard from "./FactorCard";
import SaveDreamButton from "./SaveDreamButton";
import ThumbnailCard from "./ThumbnailCard";

const ResultPage = () => {
  const [data, setData] = useState<DreamInstance | null>(null);

  const inputPrompt = localStorage.getItem(LocalstorageKeys.INPUT_PROMPT);

  const navigator = useNavigate();

  const mutation = useMutation({
    mutationFn: postDream,
    onSuccess: () => {
      navigator(Paths.HOME);
    },
  });

  const [value, setValue] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveDream = () => {
    if (!data) return;

    mutation.mutate({
      ...data,
      title: value,
      dateTime: new Date(),
      inputPrompt: inputPrompt ?? "",
    });

    setIsSaved(true);
  };

  useEffect(() => {
    const storedData = localStorage.getItem(LocalstorageKeys.RESULT);

    if (storedData) {
      try {
        const parsedData: DreamInstance = JSON.parse(JSON.parse(storedData));
        setData(parsedData);
        setValue(parsedData.title);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  if (!data) {
    return <GoldenArea />;
  }

  return (
    <GoldenArea>
      <Main>
        <Title>요소들을 분석해보았어요</Title>

        <ThumbnailCard
          image={`https://picsum.photos/300?random=1`}
          title={data.title}
          tags={data.factors.map((item) => item.tagName)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Spacer height="15px" />

        <DescriptionCard title="설명" description={data.context} />

        <Divider />

        <FactorWrapper>
          {data.factors.map((item, index) => (
            <FactorCard
              key={index}
              factorName={item.tagName}
              description={item.description}
            />
          ))}
        </FactorWrapper>

        <Divider />

        <DescriptionCard
          title="입력한 원본"
          description={inputPrompt ?? "오류가 발생했습니다."}
        />

        <Spacer height="50px" />

        <SaveDreamButton onClick={handleSaveDream}>
          <Icons.Dream size="26px" fill={COLORS.ivory} />
          <span>{isSaved ? "저장 중입니다..." : "꿈 저장하기"}</span>
        </SaveDreamButton>

        <Spacer height="100px" />
      </Main>
    </GoldenArea>
  );
};

const Title = styled.h1`
  font-weight: bolder;
  font-size: 36px;
  color: ${COLORS.dark};
`;

export const FactorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default ResultPage;
