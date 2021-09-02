// 메세지 작성 컴포넌트
import React from "react";
import { useState } from "react";
import logger from "../shared/Console";
import { useRef } from "react";

// style
import styled from "styled-components";
import { Grid, Input, Button, Text } from "../elements";
import theme from "../styles/theme";
import { customAlert } from "./Sweet";

const MessageWrite = (props) => {
  const { color, border, radius, fontSize } = theme;
  const { sendMessage } = props;  // 메세지 보내기 stomp 함수

  // 보낼 메세지 텍스트
  const now_message = useRef();
  const msg = now_message.current;

  const [new_message, setMessage] = useState("");
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  // 메세지 보내기 버튼 클릭 시 실행 될 함수
  const sendMessageBtn = () => {
    // 빈 문자열 일 경우
    if (new_message === "") {
      return customAlert.sweetConfirmReload(
        "메세지를 입력해주세요",
        ["무엇을 먹을지, 어디서 배달시킬지", "이야기해봐요 :)"],
        ""
      );
    }
    logger("보낼 메세지 내용", typeof msg.defaultValue);
    sendMessage(msg.defaultValue);  //메세지 실제로 보내기
    setMessage("");  // input 비우기
  };

  return (
    <GridTop>
      <Grid is_flex4="t" border={border.bg40} radius={radius.inputBox}>
        <Input
          flex="flex"
          height="5rem"
          is_submit
          placeholder="메세지를 입력해주세요."
          type="text"
          length={255}  // 글자수 제한
          onSubmit={sendMessageBtn}  // keyboard enter로 제출 가능
          padding="1.1rem 1.6rem"
          value={new_message}
          _onChange={changeMessage}
          ref={now_message}
          border="none"
          size="1.6rem"
        ></Input>
        <Button
          width="6rem"
          padding="0"
          border="none"
          _onClick={sendMessageBtn}
          cursor="pointer"
          bg={color.bg0}
          radius={radius.inputBox}
        >
          <Text color={color.brand100} size={fontSize.base} bg={color.bg0}>
            보내기
          </Text>
        </Button>
      </Grid>
    </GridTop>
  );
};
const GridTop = styled.div`
  // pc 환경 뷰
  @media (min-width: 415px) {
    border-style: solid;
    border-width: 0 1px;
    border-color: #cfcfcf;
    max-width: 36rem;
    box-sizing: border-box;
  }
  // 모바일 환경 뷰
  height: 5rem;
  width: 100%;
  margin: 0 auto;
  padding: 0.3rem;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.06);
`;
export default MessageWrite;
