import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { postInterpretation } from "src/api/dreams/dreams";
import Icons from "src/assets/Icons";
import { GoldenArea } from "src/components/area/Area";
import Main from "src/components/area/Main";
import Spacer from "src/components/spacer/Spacer";
import styled from "styled-components";

import Textarea from "./Textarea";

const WritePage = () => {
  const [value, setValue] = useState("");

  const mutation = useMutation({ mutationFn: postInterpretation });

  const onSubmitClick = () => {
    mutation.mutate({ dream_description: value });
  };

  return (
    <GoldenArea $isCenter>
      <Main>
        <Icons.Dream size="120px" />

        <Title>오늘은 어떤 꿈을 꾸셨나요?</Title>

        <Spacer height="10px" />

        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="꿈에서 나왔던 상황을 간단히 적어 주세요."
          rows={6}
          maxLength={500}
          isSubmitDisabled={value.length === 0}
          onSubmitClick={() => {
            console.log(value);
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

export default WritePage;
