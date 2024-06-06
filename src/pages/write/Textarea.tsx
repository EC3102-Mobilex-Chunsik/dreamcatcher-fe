import COLORS from "src/colors";
import Spacer from "src/components/spacer/Spacer";
import styled from "styled-components";

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows: number;
  maxLength: number;
  disabled?: boolean;
  isSubmitDisabled: boolean;
  onSubmitClick: () => void;
}

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows,
  maxLength,
  disabled,
  isSubmitDisabled,
  onSubmitClick,
}: TextAreaProps) => {
  return (
    <Wrapper>
      <_Textarea
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <ValueLength>
          {value.length}/{maxLength}
        </ValueLength>

        <Spacer width="20px" />

        <SubmitButton
          disabled={isSubmitDisabled}
          $disabled={isSubmitDisabled}
          onClick={onSubmitClick}
        >
          제출
        </SubmitButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  padding: 20px 20px;
  background-color: ${COLORS.dark};
  width: 100%;
  border-radius: 10px;
`;

const _Textarea = styled.textarea<{ disabled?: boolean }>`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ disabled }) => (disabled ? COLORS.grey : COLORS.white)};
  width: 100%;

  ::placeholder {
    color: ${COLORS.grey};
  }

  outline: none;

  border: none;
  resize: none;
  background-color: transparent;
`;

const ValueLength = styled.span`
  color: ${COLORS.grey};
  font-size: 14px;
`;

const SubmitButton = styled.button<{ $disabled: boolean }>`
  background-color: transparent;

  color: ${(props) => (props.$disabled ? COLORS.grey : COLORS.ivory)};

  font: 18px bold;
  padding: 5px;

  outline: none;
  border: none;
  cursor: pointer;
`;

export default Textarea;
