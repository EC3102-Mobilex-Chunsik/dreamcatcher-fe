import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postInterpretation } from "src/api/dreams/dreams";
import Icons from "src/assets/Icons";
import { GoldenArea } from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import LocalstorageKeys from "src/localstorage";
import Paths from "src/paths";
import styled, { css, keyframes } from "styled-components";

import Textarea from "./Textarea";

const WritePage = () => {
  useEffect(() => {
    localStorage.removeItem(LocalstorageKeys.INPUT_PROMPT);
  }, []);

  const [value, setValue] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigator = useNavigate();

  const mutation = useMutation({
    mutationFn: postInterpretation,
    onSuccess: (data) => {
      const purifiedData = JSON.stringify(data.interpretation);

      localStorage.setItem(LocalstorageKeys.RESULT, purifiedData);
      navigator(Paths.RESULT);
    },
  });

  const onSubmitClick = () => {
    mutation.mutate({ dream_description: value });
    setIsSubmitted(true);
    localStorage.setItem(LocalstorageKeys.INPUT_PROMPT, value);
  };

  return (
    <GoldenArea $isCenter>
      <Main>
        <AnimationWrapper $isAnimationActive={isSubmitted}>
          <Icons.Dream size="120px" />
        </AnimationWrapper>

        <Title>
          {!isSubmitted
            ? "오늘은 어떤 꿈을 꾸셨나요?"
            : "꿈을 분석하고 있어요..."}
        </Title>

        <Spacer height="10px" />

        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="꿈에서 나왔던 상황을 간단히 적어 주세요."
          disabled={isSubmitted}
          rows={6}
          maxLength={500}
          isSubmitDisabled={value.length === 0 || isSubmitted}
          onSubmitClick={() => {
            onSubmitClick();
          }}
        />

        <Spacer height="100px" />
      </Main>
    </GoldenArea>
  );
};

const Title = styled.h1`
  font-size: 36px;
  font-weight: bolder;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AnimationWrapper = styled.div<{ $isAnimationActive: boolean }>`
  width: fit-content;

  ${({ $isAnimationActive }) =>
    $isAnimationActive &&
    css`
      animation: ${rotationAnimation} 2s linear infinite;
    `}
`;

export default WritePage;
