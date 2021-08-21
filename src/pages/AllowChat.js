import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { history } from "../redux/configureStore";

// style
import styled from "styled-components";
import { Header, Footer, AllowList, PcSide } from "../components";
import { Grid, Text } from "../elements";
import theme from "../styles/theme";
import { TapGrid } from "./ChatRoomList";
import logger from "../shared/Console";

// 이미지
import { png } from "../styles/img/index";
import { webp } from "../styles/img/webp/index";
import { isWebpSupported } from "react-image-webp/dist/utils";

const AllowChat = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(chatActions.requestChatListAX());
  }, []);

  // 현재 room_id 필요

  const { color, border, fontSize } = theme;

  // 채팅 승인 목록
  const allow_list = useSelector((state) => state.chat.requestList);

  return (
    <React.Fragment>
      <PcSide {...props} />
      <Grid
        // maxWidth="36rem"
        minHeight="100vh"
        // border={border.line1}
        margin="0 auto"
        padding="0 0 6rem 0"
      >
        <Grid shape="container">
          <Header {...props} shape="채팅리스트" />
          <Grid height="4.4rem" />
          <Footer {...props}></Footer>
          <TapGrid>
            <Grid
              width="100%"
              padding="0 2rem"
              margin="0"
              _onClick={() => {
                history.push("/chatlist");
              }}
              cursor="pointer"
            >
              <Text
                size={fontSize.base}
                margin="0 0 0.8rem"
                color={color.bg60}
                bold2="700"
              >
                참여중인 채팅방
              </Text>
            </Grid>
            <Grid
              borderBottom={border.line3}
              width="100%"
              padding="0 2rem"
              margin="0"
              _onClick={() => {
                history.push("/allowchat");
              }}
              cursor="pointer"
            >
              <Text size={fontSize.base} bold2="700" margin="0 0 0.8rem">
                들어온 승인 요청
              </Text>
            </Grid>
          </TapGrid>

          {allow_list.map((info, idx) => {
            return (
              <AllowList
                key={idx}
                join_id={info.join_id}
                roomName={info.title}
                user_id={info.user_id}
                user_img={info.user_img}
                username={info.username}
              />
            );
          })}

          {allow_list.length === 0 && (
            <>
              <Grid
                shape="empty"
                src={
                  isWebpSupported() ? webp.emptyBubblesWebp : png.emptyBubbles
                }
              >
                <EmptyText theme={theme}>아직 들어온 요청이 없어요.</EmptyText>
              </Grid>
              <Grid height="20rem"></Grid>
            </>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

AllowChat.defaultProps = {};

const EmptyText = styled.p`
  position: relative;
  text-align: center;
  top: 15rem;
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.color.bg80};
`;
export default AllowChat;
