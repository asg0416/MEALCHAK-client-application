// MyReview map 함수 하위 컴포넌트
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import { Grid, Text } from "../elements";
import { customAlert } from "./Sweet";
import theme from "../styles/theme";
import logger from "../shared/Console";

const MyOneReview = React.memo((props) => {
  const { color, fontSize } = theme;

  const is_login = useSelector((state) => state.user.is_login);
  const user_info = useSelector((state) => state.user.user);

  // 연, 월
  const ym = props.other_user
    ? props?.createdAt.split("-")
    : props?.insert_dt.split("-");
  // 일
  const day = ym[2].split(" ");
  // 시, 분
  const hm = day[1].split(":");

  return (
    <React.Fragment>
      <Grid
        padding="0 2rem 0 2rem"
        margin="1.5rem 0 0 0"
        borderBottom="0.1rem solid #F4F4F3"
      >
        <Profile
          user_profile={props.other_user ? props.profileImg : props.user_profile}
          onClick={() => {
            if (is_login) {
              if (user_info.user_id === props.userId) {
                return history.push({
                  pathname: "/myprofile",
                  state: { ...props },
                });
              }
              if (props.userId) {
                return history.push({
                  pathname: `/userprofile/${props.userId}`,
                  state: { ...props },
                });
              }
              if (props.user_id) {
                return history.push({
                  pathname: `/userprofile/${props.user_id}`,
                  state: { ...props },
                });
              }
            } else {
              customAlert.sweetNeedLogin();
            }
          }}
        />
        <Grid
          display="flex"
          justify_content="flex-start"
          align_items="center"
          minWidth="3.6rem"
          height="2rem"
          padding="0 0 0 5rem"
        >
          <Text size={fontSize.small} line_height="150%" color={color.bg100}>
            {props.other_user ? props.username : props.user_nickname}
          </Text>
            <Text
              width="5.7rem"
              height="1.9rem"
              bg={color.brand20}
              color={color.brand100}
              size={fontSize.tiny}
              bold
              line_height="150%"
              text_align="center"
              radius="0.8rem"
              padding="0.2rem"
              margin="0 0 0 0.6rem"
            >
              {props?.is_me ? props?.my_manner : props?.manner}
            </Text>
        </Grid>
        <Grid
          width="fit-content"
          bg="#F4F4F3"
          margin="0.4rem 0 0 5rem"
          padding="0.8rem 0.5rem"
          flex
          align_items="flex-start"
          radius="0 1.2rem 1.2rem 1.2rem"
        >
          <Text margin="0 0.4rem" size={fontSize.small}>
            {props.other_user ? props.review : props.review}
          </Text>
        </Grid>
        <Grid height="1.5rem" padding="0 0 0 5rem">
          <Text
            size={fontSize.tiny}
            line_height="150%"
            color="#9A9896"
            margin="0.8rem 0 0 0"
          >
            {ym[0]}년 {ym[1]}월 {day[0]}일 {hm[0]}:{hm[1]}에 남긴 리뷰에요.
          </Text>
        </Grid>
        <Grid height="1.5rem" />
      </Grid>
    </React.Fragment>
  );
});

const Profile = styled.div`
  position: absolute;
  margin: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: black;
  ${(props) =>
    props.user_profile
      ? `background-image: url(${props.user_profile});`
      : `background-image: url(http://115.85.182.57:8080/image/profileDefaultImg.jpg)`}
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export default MyOneReview;
