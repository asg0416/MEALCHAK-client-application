// 채팅 참여 리스트 목록 페이지 
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as chatActions } from "../redux/modules/chat";
import { actionCreators as userAction } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { token } from "../shared/OAuth";

// style
import { Header, Footer, ChatListItem, AwaitList, PcSide } from "../components";
import { Grid, Text, Image } from "../elements";
import theme from "../styles/theme";
import styled from "styled-components";

// 이미지
import { png } from "../styles/img/index";
import { webp } from "../styles/img/webp/index";
import { isWebpSupported } from "react-image-webp/dist/utils";

const ChatRoomList = (props) => {
  const dispatch = useDispatch();
  const { color, border, fontSize } = theme;

  // 로그인 체크
  React.useEffect(() => {
    document
      .querySelector("body")
      .scrollTo({ top: 0, left: 0, behavior: "instant" });
    dispatch(userAction.loginCheck("/chatlist"));

    // 로그인 후 토큰이 있는 경우
    // 참여중인 채팅방 목록, 승인 대기 목록 요청
    // 현재 채팅방 정보 초기화
    if (token) {
      dispatch(chatActions.setChatListAX());
      dispatch(chatActions.awaitChatListAX());
      dispatch(chatActions.clearChat());
    }
  }, []);

  // 채팅 목록
  const chat_list = useSelector((state) => state.chat.chatListInfo);

  // 채팅 대기 목록
  const await_list = useSelector((state) => state.chat.awaitList);

  // 알람
  const is_alarm = useSelector((state) => state.user.user?.new_join_request);
  
  const enterRoom = (room_id, roomName, post_id, own_user_id, order_time) => {
    // 채팅방 들어갔다가 뒤로가기 누르면 자동으로 방나가기
    // room_id 리덕스에 저장된 걸로 실제 채팅 페이지 이동했을 때 서버연결 시켜서 보여줌
    // 현재 채팅방 정보 바꾸기
    dispatch(
      chatActions.moveChatRoom(
        room_id,
        roomName,
        post_id,
        own_user_id,
        order_time
      )
    );
    // 채팅방 이동하면서 방 정보 넣어주기
    history.push({
      pathname: "/chatting",
      state: {
        room_id: room_id,
        roomName: roomName,
        post_id: post_id,
        own_user_id: own_user_id,
        order_time: order_time,
      },
    });
  };

  return (
    <React.Fragment>
      <PcSide {...props} />
      <Grid
        minWidth="36rem"
        minHeight="100vh"
        margin="0 auto"
        padding="0 0 5.2rem 0"
      >
        <Grid shape="container">
          <Header {...props} shape="채팅리스트" />
          <Grid height="4.4rem" />
          <Footer {...props}></Footer>
        </Grid>
        <TapGrid>
          <Grid
            borderBottom={border.line3}
            width="100%"
            padding="0 2rem"
            margin="0"
            _onClick={() => {
              history.push("/chatlist");
            }}
            cursor="pointer"
          >
            <Text size={fontSize.base} bold2="700" margin="0 0 0.8rem">
              참여중인 채팅방
            </Text>
          </Grid>
          <Grid width="100%" padding="0 2rem" margin="0" position="relative">
          <Grid
            width="fit-content"
            height="fit-content"
            position="absolute"
            top="-0.6rem"
            right="1.2rem"
            >

            {/* 채팅 알림 있는 경우 */}
            {is_alarm && (
              <Image 
              size="0.9"
              src={isWebpSupported() ? webp.alarmWebp : png.alarm} />
            )}
            </Grid>
            <Text
              bold2="700"
              size={fontSize.base}
              margin="0 0 0.8rem"
              color={color.bg60}
              _onClick={() => {
                history.push("/allowchat");
              }}
              cursor="pointer"
            >
              들어온 승인 요청
            </Text>
          </Grid>
        </TapGrid>

        {/* 채팅 목록 */}
        {chat_list?.map((info, idx) => {
          return (
            <ChatListItem
              key={idx}
              new_msg={info.new_msg}
              live_chat={info.live_chat}
              room_id={info.room_id}
              roomName={info.roomName}
              post_id={info.postId}
              headCountChat={info.headCountChat}
              _onClick={(e) => {
                enterRoom(
                  info.room_id,
                  info.roomName,
                  info.postId,
                  info.own_user_id,
                  info.order_time
                );
              }}
            />
          );
        })}

        {/* 대기 목록 */}
        {await_list?.map((info, idx) => {
          return (
            <AwaitList key={idx} roomName={info.title} join_id={info.join_id} />
          );
        })}

        {/* 참여중인 채팅 목록, 대기 목록 모두 없는 경우 빈 기본값 이미지 */}
        {await_list?.length === 0 && chat_list?.length === 0 && (
          <>
            <Grid
              shape="empty"
              src={isWebpSupported() ? webp.emptyBubblesWebp : png.emptyBubbles}
            >
              <EmptyText theme={theme}>아직 채팅 내용이 없어요.</EmptyText>
            </Grid>
            <Grid height="20rem"></Grid>
          </>
        )}
      </Grid>
    </React.Fragment>
  );
};

ChatRoomList.defaultProps = {};

const EmptyText = styled.p`
  position: relative;
  text-align: center;
  top: 15rem;
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.color.bg80};
`;

export const TapGrid = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(207, 207, 207);
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
`;

export default ChatRoomList;
