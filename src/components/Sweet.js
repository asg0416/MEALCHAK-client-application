import React from "react";
import axiosModule from "../redux/axios_module";
import logger from "../shared/Console";

// sweet alert2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// 리덕스 기능 관련
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as chatActions } from "../redux/modules/chat";

// style
import { Text, Button, Grid } from "../elements";
import theme from "../styles/theme";
import "./sweet.css";

const { color, fontSize } = theme;
const sweet = withReactContent(Swal);

// 단순 확인 알럿
// 최상위 제목으로 들어올값, 내용, 주소이동 필요 시 리로드될 주소를 파람값으로 받음
// 기본 적으로 처음 함수 만들때 리로드 목적으로 만들어서 path 값 조건 확인 후 사용
const sweetConfirmReload = (msg_title, msg_content, path) => {
  return sweet
    .fire({
      customClass: {
        popup: "border",
        confirmButton: "confirmButton",
      },
      width: "auto",
      padding: "0 1rem 1rem",
      title: (
        <Grid>
          <Text size={fontSize.base} bold2="700" margin="0 auto 1rem">
            {msg_title}
          </Text>
          <Text size={fontSize.small}>{msg_content}</Text>
        </Grid>
      ),
      confirmButtonColor: color.brand100,
      confirmButtonText: (
        <Text padding="0 2rem" color={color.bg0}>
          확인
        </Text>
      ),
      focusConfirm: false,
    })
    .then((res) => {
      if (res.isConfirmed) {
        // 주소 값이 없으면 리턴
        if (path === "") {
          return;
        }
        // 리로드 아니고 history 일때
        if (path === "history") {
          history.replace("/home");
          return;
        }
        // 뒤로가기
        if (path === "goBack") {
          history.goBack();
          return;
        }
        // 그 외 새로 리로드 될때
        window.location.replace(path);
      }
    });
};

// 로그인 체크 시 사용
// 체크 후 주소 이동 방식에 따라 달라서 파람값으로 replace 인지 받음
const sweetNeedLogin = (way) => {
  return sweet
    .fire({
      customClass: {
        popup: "border",
      },
      width: "auto",
      padding: "0 1rem 1rem",
      title: (
        <Grid>
          <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
            앗 로그인이 필요해요!
          </Text>
          <Text size={fontSize.small}>
            1초 만에 카카오 로그인하면
            <br />
            밀착 서비스를 사용하실 수 있어요
          </Text>
        </Grid>
      ),
      showCancelButton: true,
      cancelButtonColor: color.brand20,
      cancelButtonText: (
        <Text padding="0 2rem" color={color.brand100}>
          닫기
        </Text>
      ),
      confirmButtonColor: color.brand100,
      confirmButtonText: (
        <Text padding="0 2rem" color={color.bg0}>
          확인
        </Text>
      ),
      focusConfirm: false,
    })
    .then((res) => {
      if (res.isConfirmed) {
        if (way === "replace") {
          history.replace("/");
        }
        history.push("/");
      }
    });
};

// 잘못된 페이지 접근일때 표시
const sweetWA = () => {
  return sweet
    .fire({
      customClass: {
        popup: "border",
      },
      width: "auto",
      padding: "0 1rem 1rem",
      title: (
        <Grid>
          <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
            잘못된 접근입니다.
          </Text>
          <Text size={fontSize.small}>홈으로 돌아갑니다.</Text>
        </Grid>
      ),
      showCancelButton: false,
      cancelButtonColor: color.brand20,
      cancelButtonText: (
        <Text padding="0 2rem" color={color.brand100}>
          닫기
        </Text>
      ),
      confirmButtonColor: color.brand100,
      confirmButtonText: (
        <Text padding="0 2rem" color={color.bg0}>
          확인
        </Text>
      ),
      focusConfirm: false,
    })
    .then((res) => {
      if (res.isConfirmed) {
        history.push("/home");
      }
    });
};

// 작성 에러시 홈으로 간다고 하면 홈으로 보내고
// 홈으로 안가면 이전 디테일 페이지로 보내줌
const sweetEditError = (path) => {
  return sweet
    .fire({
      customClass: {
        popup: "border",
      },
      width: "auto",
      padding: "0 1rem 1rem",
      title: (
        <Grid>
          <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
            모집글 작성에 에러가 발생했습니다.
          </Text>
          <Text size={fontSize.small}>홈 화면으로 돌아가시겠습니까?</Text>
        </Grid>
      ),
      showCancelButton: false,
      cancelButtonColor: color.brand20,
      cancelButtonText: (
        <Text padding="0 2rem" color={color.brand100}>
          닫기
        </Text>
      ),
      confirmButtonColor: color.brand100,
      confirmButtonText: (
        <Text padding="0 2rem" color={color.bg0}>
          확인
        </Text>
      ),
      focusConfirm: false,
    })
    .then((res) => {
      if (res.isConfirmed) {
        history.replace("/home");
      } else {
        history.push(path);
      }
    });
};

// const JoinChat = (props) => {
//   const dipatch = useDispatch()
// }

// 채팅 신청 알럿
// 메인 페이지 포스트, 검색, 디테일 페이지 포스트 3군데 달아야함
const SweetChatRequest = (user_id, post_user_id, post_id) => {
  if (user_id === post_user_id) {
    sweet
      .fire({
        customClass: {
          popup: "border",
        },
        width: "auto",
        padding: "0 1rem 1rem",
        title: (
          <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
            본인이 작성한 글입니다.
          </Text>
        ),
        text: "채팅 탭으로 이동하시겠습니까?",
        showDenyButton: true,
        denyButtonText: (
          <Text padding="0 2rem" color={color.brand100}>
            닫기
          </Text>
        ),
        denyButtonColor: color.brand20,
        confirmButtonColor: color.brand100,
        confirmButtonText: (
          <Text padding="0 2rem" color={color.bg0}>
            확인
          </Text>
        ),
        focusConfirm: false,
      })
      .then((res) => {
        if (res.isConfirmed) {
          history.push("/chatlist");
        } else if (res.isDenied) {
          return;
        } else {
          return;
        }
      });
  } else {
    sweet
      .fire({
        customClass: {
          popup: "border",
        },
        width: "auto",
        padding: "0 1rem 1rem",
        title: (
          <Grid>
            <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
              채팅방 신청하시겠습니까?
            </Text>
          </Grid>
        ),
        text: "신청확인을 누르면\n방장에게 승인요청을 보냅니다",
        showDenyButton: true,
        denyButtonText: (
          <Text padding="0 2rem" color={color.brand100}>
            취소
          </Text>
        ),
        denyButtonColor: color.brand20,
        confirmButtonColor: color.brand100,
        confirmButtonText: (
          <Text padding="0 2rem" color={color.bg0}>
            요청하기
          </Text>
        ),
        focusConfirm: false,
      })
      .then((res) => {
        if (res.isConfirmed) {
          axiosModule
            .get(`/posts/join/request/${post_id}`)
            .then((res) => {
              logger("채팅 신청", res);
              if (res.data === "이미 신청한 글입니다") {
                sweetConfirmReload(
                  "이미 신청한 방입니다.",
                  "승인 대기 중이니 기다려주세요.",
                  ""
                );
              } else {
                sweetConfirmReload(
                  "신청이 완료되었습니다.",
                  "채팅탭에서 확인가능합니다.",
                  ""
                );
              }
            })
            .catch((e) => {
              logger("채팅방 참여 승인 요청 에러", e);
            });
        } else if (res.isDenied) {
          sweetConfirmReload("요청 취소", "승인 요청이 취소되었습니다.", "");
        } else {
          return;
        }
      });
  }
};

const SweetAllowChat = (join_id) => {
  sweet
    .fire({
      customClass: {
        popup: "border",
      },
      width: "auto",
      padding: "0 1rem 1rem",
      title: (
        <Grid>
          <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
            수락하시겠습니까?
          </Text>
        </Grid>
      ),
      text: "수락을 누르면 채팅방으로 초대됩니다.",
      showDenyButton: true,
      denyButtonText: (
        <Text padding="0 2rem" color={color.brand100}>
          취소
        </Text>
      ),
      denyButtonColor: color.brand20,
      confirmButtonColor: color.brand100,
      confirmButtonText: (
        <Text padding="0 2rem" color={color.bg0}>
          수락
        </Text>
      ),
      focusConfirm: false,
    })
    .then((res) => {
      if (res.isConfirmed) {
        axiosModule
          .get(`/posts/join/request/accept/${join_id}?accept=true`)
          .then((res) => {
            logger("승인 수락 res", res);
            sweetConfirmReload(
              "수락 완료",
              "수락이 완료되었습니다.",
              "/allowchat"
            );
          })
          .catch((e) => {
            logger("채팅방 참여 승인 요청 에러", e);
            sweetConfirmReload(
              "승인 요청 에러",
              "채팅방 참여 승인 요청 중 에러가 발생했습니다",
              ""
            );
          });
      } else if (res.isDenied) {
        return;
      } else {
        return;
      }
    });
};

const SweetDenyChat = (join_id) => {
  sweet
    .fire({
      customClass: {
        popup: "border",
      },
      width: "auto",
      padding: "0 1rem 1rem",
      title: (
        <Grid>
          <Text margin="0 auto 1rem" size={fontSize.base} bold2="700">
            수락 거절하시겠습니까?
          </Text>
        </Grid>
      ),
      text: "거절을 누르면 요청이 삭제됩니다.",
      showDenyButton: true,
      denyButtonText: (
        <Text padding="0 2rem" color={color.brand100}>
          취소
        </Text>
      ),
      denyButtonColor: color.brand20,
      confirmButtonColor: color.brand100,
      confirmButtonText: (
        <Text padding="0 2rem" color={color.bg0}>
          거절
        </Text>
      ),
      focusConfirm: false,
    })
    .then((res) => {
      if (res.isConfirmed) {
        axiosModule
          .get(`/posts/join/request/accept/${join_id}?accept=false`)
          .then((res) => {
            logger("승인 거절 res", res);
            sweetConfirmReload(
              "거절 완료",
              "수락 거절이 완료되었습니다.",
              "/allowchat"
            );
          })
          .catch((e) => {
            logger("채팅방 참여 승인 요청 에러", e);
            sweetConfirmReload(
              "승인 요청 에러",
              "채팅방 참여 승인 요청 중 에러가 발생했습니다",
              ""
            );
          });
      } else if (res.isDenied) {
        return;
      } else {
        return;
      }
    });
};

const customAlert = {
  sweetConfirmReload,
  sweetNeedLogin,
  sweetWA,
  sweetEditError,
  SweetChatRequest,
  SweetAllowChat,
  SweetDenyChat,
};

export { customAlert };