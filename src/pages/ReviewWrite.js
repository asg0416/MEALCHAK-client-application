// 리뷰 작성 페이지
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { actionCreators as userActions } from "../redux/modules/user";
import { customAlert } from "../components/Sweet";
import { Grid, Button, Text, Input } from "../elements";
import { Header, PcSide } from "../components";
import Select from "../components/ReactSelect";

import theme from "../styles/theme";
import logger from "../shared/Console";


// select options
const options = [
  { value: "chocolate", label: "최고예요!" },
  { value: "strawberry", label: "좋아요~" },
  { value: "vanilla", label: "별로예요:(" },
];

const ReviewWrite = (props) => {
  const { color, fontSize } = theme;
  const dispatch = useDispatch();
  const location = useLocation();

  const [manner, setManner] = React.useState("");
  const [review, setReview] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  const changeManner = (manner) => {
    if (manner === "최고예요!") {
      setManner("BEST");
      setDisabled(false);
    }
    if (manner === "좋아요~") {
      setManner("GOOD");
      setDisabled(false);
    }
    if (manner === "별로예요:(") {
      setManner("BAD");
      setDisabled(false);
    }
  };

  const reviewWrite = () => {
    dispatch(
      userActions.reviewWriteAX(
        manner,
        review,
        location.state?.user_id,
        location.state?.nickname
      )
    );
  };

  const changeDisabled = (e) => {
    if (e.target.value.length === 150) {
      customAlert.sweetOK("입력 가능한 글자수를 초과했어요", "리뷰 작성 시 150자 이내로 작성해주세요.").then(() => {
        return ;
      })
    }
    setReview(e.target.value);
    setDisabled(false);
  };

  React.useEffect(() => {
    logger("ReviewWrite props: ", props);
    logger("ReviewWrite location-state: ", location.state);
  }, []);

  React.useEffect(() => {
    if (manner === "" || review === "" || review === " ") {
      setDisabled(true);
    } else if (manner && review) {
      setDisabled(false);
    }
  }, [manner, review]);

  return (
    <>
      <PcSide {...props} />
      <Grid
        minHeight="100vh"
        margin="0 auto"
      >
        <Grid shape="container">
          <Header {...props} shape="리뷰남기기" />
          <Grid height="4.4rem" />

          <Grid margin="2rem auto 1rem">
            <Profile user_profile={location.state.profile}></Profile>
          </Grid>
          <Grid margin="0 auto 2rem">
            <Text
              width="auto"
              size={fontSize.large}
              color={color.bg100}
              bold2="500"
              line_height="150%"
              text_align="center"
            >
              {location.state.nickname}
            </Text>
          </Grid>
          <GreyLine />
          <Grid padding="0 2rem">
            <Text
              width="auto"
              margin="2rem 0 1rem 0"
              size={fontSize.base}
              color={manner ? color.bg100 : color.bg80}
              bold2="500"
              line_height="150%"
            >
              해당 사용자와의 밀착은 어땠나요?
            </Text>
            <Grid margin="0 0 2rem 0">
              <Select
                value={manner}
                options={options}
                changeManner={changeManner}
              ></Select>
            </Grid>
          </Grid>
          <Grid
            width="36rem"
            height="30rem"
            padding="1rem 3rem 0 3rem"
            borderTop="0.1rem solid #EBE9E8"
          >
            <Input
              type="text"
              height="100%"
              bold="400"
              border="none"
              size={fontSize.base}
              placeholder="해당 사용자와의 밀착이 만족스러우셨다면 따뜻한 리뷰를 전해보세요!"
              multiLine="t"
              length="150"
              color="#9A9896"
              value={review}
              _onChange={changeDisabled}
            />
          </Grid>
        </Grid>
        <Grid
          maxWidth="35.9rem"
          width="100%"
          height="auto"
          margin="1rem auto 0 auto"
          padding="1.5rem 2rem"
          borderTop="0.1rem solid #EBE9E8"
        >
          <Button
            shape="large"
            color={!disabled ? color.brand100 : color.bg40}
            size={fontSize.small}
            cursor="t"
            _onClick={reviewWrite}
            disabled={disabled}
          >
            <Text bold size="1.6rem" color={!disabled ? color.bg0 : color.bg60}>
              보내기
            </Text>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

ReviewWrite.defaultProps = {};

const Profile = styled.div`
  margin: auto;
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  ${(props) =>
    props.user_profile
      ? `background-image: url(${props.user_profile});`
      : `background-image: url(http://115.85.182.57:8080/image/profileDefaultImg.jpg);`}
  background-size: cover;
  background-position: center;
`;

const GreyLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  margin: 1rem auto;
  background-color: #f1f2f4;
  &:hover {
    background-color: red;
  }
`;

export default ReviewWrite;
