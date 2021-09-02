// 내가 보는 내 프로필(마이페이지 아닌 타 유저가 보는 내 프로필과 비교)
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { MyOneReview } from "../components";

// style
import { Button, Grid, Text } from "../elements";
import { Header, ProfileTab, PcSide } from "../components";
import theme from "../styles/theme";
import Spinner from "../shared/Spinner";
import logger from "../shared/Console";

// 이미지
import { png } from "../styles/img/index";
import { webp } from "../styles/img/webp/index";
import { isWebpSupported } from "react-image-webp/dist/utils";

const MyProfile = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user?.is_login);
  const other_user = useSelector((state) => state.user?.anotherUser);
  const user_id = props.location.state.user_id
    ? props.location.state.user_id
    : props.location.state.userId;

  const { color, fontSize, radius } = theme;

  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);

    dispatch(userAction.loginCheck());
    dispatch(userAction.findUserProfileAX(user_id));
  }, []);

  if (is_login) {
    return (
      <React.Fragment>
        <PcSide {...props} />
        <Grid
          minHeight="100vh"
          margin="0 auto"
        >
          <Grid shape="container">
            <Header {...props} shape="프로필" />
            <Grid height="4.4rem" />
            <Grid margin="1.6rem auto 2rem">
              <Profile user_profile={other_user?.user_profile}></Profile>
            </Grid>
            <Grid margin="0 auto">
              <Text
                width="auto"
                size={fontSize.large}
                color={color.bg100}
                bold
                line_height="150%"
                text_align="center"
                overflow="hidden"
                text_overflow="ellipsis"
                white_space="nowrap"
                display="block"
              >
                {other_user?.user_nickname}
              </Text>
              <Grid
                width="24rem"
                text_align="center"
                margin="0.5rem auto 0 auto"
              >
                <Text size={fontSize.small} color="#9A9896" line_height="150%">
                  <span
                    style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
                  >
                    {other_user?.user_comment ? other_user?.user_comment : ""}
                  </span>
                </Text>
              </Grid>
            </Grid>
            {/* 매너점수, 성별, 연령 */}
            <ProfileTab user_info={other_user} />

            <Grid width="32rem" height="5rem" margin="0 auto">
              <Button
                width="32rem"
                height="5rem"
                radius={radius.button}
                border="0.1rem solid #EBE9E8"
                bg={color.bg0}
                margin="0 0 6.4rem 0"
              >
                <Text
                  width="30.4rem"
                  height="2.4rem"
                  bold
                  size={fontSize.base}
                  line_height="150%"
                  text_align="center"
                  color={color.bg60}
                >
                  나에겐 리뷰를 남길 수 없어요
                </Text>
              </Button>
            </Grid>
            <Grid height="1.6rem" />
            <Grid padding="0 0 0 2rem" margin="0">
              <Text
                bold2="700"
                size={fontSize.base}
                line_height="150%"
                color={color.bg100}
              >
                함께 밀착한 사용자들이 남긴 리뷰
              </Text>
            </Grid>
            {other_user?.user_review.length !== 0 ? (
              other_user?.user_review.map((p, idx) => {
                return <MyOneReview other_user {...p} key={idx} />;
              })
            ) : (
              <Grid width="36rem" margin="0 auto">
                <MyReviewImg
                  src={
                    isWebpSupported() ? webp.emptyMeal_3xWebp : png.emptyMeal_3x
                  }
                ></MyReviewImg>
                <MyReviewText>아직 받은 리뷰가 없어요.</MyReviewText>
              </Grid>
            )}
            <Grid height="6rem" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } else {
    return <Spinner />;
  }
};

MyProfile.defaultProps = {};

const Profile = styled.div`
  margin: auto;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  ${(props) =>
    props.user_profile
      ? `background-image: url(${props.user_profile});`
      : `background-image: url(http://115.85.182.57:8080/image/profileDefaultImg.jpg)`}
  background-size: cover;
  background-position: center;
`;

const MyReviewImg = styled.div`
  margin: 4.7rem auto 0 auto;
  background-image: url("${(props) => props.src}");
  width: 20rem;
  height: 11.7rem;
  background-size: cover;
  background-position: center;
`;

const MyReviewText = styled.div`
  width: 36rem;
  margin: 1rem auto 0 auto;
  font-size: 1.6rem;
  line-height: 150%;
  text-align: center;
  font-weight: 400;
  color: #9a9896;
`;
export default MyProfile;
