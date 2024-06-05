import { useState } from "react";
import Icons from "src/assets/Icons";
import COLORS from "src/colors";
import { GoldenArea } from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import { Dream } from "src/types";
import styled from "styled-components";

import DescriptionCard from "./DescriptionCard";
import Divider from "./Divider";
import FactorCard from "./FactorCard";
import SaveDreamButton from "./SaveDreamButton";
import ThumbnailCard from "./ThumbnailCard";

const TEMP_RECORDS: Dream = {
  id: 1,
  title: "나비 꿈",
  context:
    "전반적으로, 이 꿈은 현재 당신이 경험하고 있는 삶의 변화와 그에 따른 적응 과정, 정보의 수용 방식, 그리고 타인에 대한 책임감과 보호 욕구에 대한 내적인 반영일 수 있습니다. 자신이 어떻게 이러한 상황들을 처리하고 있는지 생각해 보시면 좋을 것 같아요.",
  factors: [
    {
      tagName: "나비",
      description:
        "이 부분은 새로운 상황이나 환경에 적응하려는 노력을 상징할 수 있습니다. 일상에서 경험하지 못한 새로운 상황에 놓였을 때의 불안감과 동시에 그 상황에 적응하려는 자신의 노력을 반영하는 것 같아요.",
    },
    {
      tagName: "몽환적",
      description:
        "이 장면은 새로운 아이디어나 정보가 강렬하게 다가오는 경험을 상징할 수 있습니다. 파란색 클로버가 심장박동처럼 움직이는 것은 무언가에 대한 두려움이나 긴장을 의미할 수도 있으며, 이는 꿈에서 호흡 곤란을 겪는 사람과 연결되어 있을 수 있습니다. 이는 정보나 사건이 감정적으로 어떻게 영향을 미칠 수 있는지를 보여주는 것일 수 있어요.",
    },
    {
      tagName: "포근",
      description:
        "이 부분은 책임감과 보호의 욕구를 나타낼 수 있습니다. 비 오는 날에 아이에게 우산을 씌워주는 행동은 다른 이들을 보호하고자 하는 당신의 성향을 반영할 수 있어요. 또한, 이는 어려운 상황에서도 타인을 돕고자 하는 당신의 능력을 상징할 수 있습니다.",
    },
  ],
  dateTime: new Date(),
  inputPrompt:
    "오늘 이상한 꿈을 꿨어. 전체적으로는 기억나지 않지만 드문드문 있는 기억을 종합해서 말해 볼게. 어떤 과학관 체험장 같은 곳에 가족과 같이 가서, 다른 여러 사람들과 함께 체험장에 있었어. 직원이 설명해주고 공기를 들이마셨더니 갑자기 몸이 부유했고, 천장 쪽으로 다리를 돌리니까 빨리 떨어졌어. 중력이 반전되었던 것이었어. 다들 신기해했고 이것에 적응하는 데 시간이 걸렸어. 그리고 천장에 앉아서 직원분이 영상을 틀어 줬어. 영상에는 회로와 관련된 멋지고 화려한 모션그래픽이 있었던 것 같아. 모션그래픽 도중에 어떤 파란색 클로버 모양 물체가 심장박동처럼 움직였는데, 이게 점점 빨리 뛰었어. 옆을 보니 같이 체험 중이던 어떤 분이 호흡 곤란을 겪던 중이시더라고. 그리고 꿈의 다른 파편에서는, 어떤 아이가 아파트 단지 내에서 킥보드를 타고 가는 걸 내가 도와주면서 비가 오길래 우산을 씌워 줬어. ",
};

const ResultPage = () => {
  const data = TEMP_RECORDS;

  const [value, setValue] = useState("");

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

        <DescriptionCard title="입력한 원본" description={data.inputPrompt} />

        <Spacer height="50px" />

        <SaveDreamButton>
          <Icons.Dream size="26px" fill={COLORS.ivory} />
          <span>꿈 저장하기</span>
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

const FactorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default ResultPage;
