// 모임 만들기 하단 인풋 모음 컨포넌트
import React from "react";
import logger from "../shared/Console";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAddress, ShopAddress } from ".";
import { actionCreators as locateActions } from "../redux/modules/loc";

// 날짜 설정
import moment from "moment";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

// select 라이브러리 커스텀 함수 모음
import { HeadSelect, CTGSelect, MeetingSelect } from "./ReactSelect";

// style
import theme from "../styles/theme";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements";
import { IoIosCloseCircle } from "react-icons/io";
import "./style.css";
import "./restaurant.css";
import "react-datepicker/dist/react-datepicker.css";

const UploadInput = React.memo((props) => {
  const dispatch = useDispatch();
  const { color, fontSize, radius, border } = theme;

  // 모집인원 select options
  const head_options = [
    { value: "2", label: "2명" },
    { value: "3", label: "3명" },
    { value: "4", label: "4명" },
  ];

  // 음식 카테고리 select options
  const food_options = [
    { value: "한식", label: "한식" },
    { value: "분식", label: "분식" },
    { value: "중식", label: "중식" },
    { value: "일식", label: "일식" },
    { value: "양식", label: "양식" },
    { value: "카페", label: "카페" },
    { value: "기타", label: "기타" },
  ];

  // 모집 유형 카테고리 select options
  const meeting_options = [
    { value: "SEPARATE", label: "배달만" },
    { value: "TOGETHER", label: "배달 + 식사" },
  ];

  // 날짜 한국어 표시 함수
  const getDayName = (date) => {
    return date.toLocaleDateString("ko-KR", { weekday: "long" }).substr(0, 1);
  };

  // 날짜 비교시 년 월 일까지만 비교하게끔
  const createDate = (date) => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  };

  // datepicker 라이브러리 사용을 위해, date 객체 사용
  // 디폴트 현재 시간
  const today = moment().toDate();
  // 수정 페이지 시간
  const modi_time = `${props.post_info.appointmentDate} ${props.post_info.appointmentTime}`;

  const post_address = useSelector((state) => state.loc.post_address?.address);
  const shopAddress = useSelector((state) => state.loc.shop_address);
  const place_url = useSelector((state) => state.loc.place_url);
  const coords = useSelector((state) => state.loc.post_address);
  const longitude = coords?.longitude;
  const latitude = coords?.latitude;

  const [post_info, setPostInfo] = useState(
    // post_info 자체는 항상 내려오는데 값이 수정전에는 undefined라서 그중에 하나 정해서 있는지 확인해본 코드
    props.post_info.place
      ? {
          place: props.post_info.place,
          detail_place: props.post_info.detail_place,
          restaurant: props.post_info.restaurant,
          headCount: props.post_info.headCount,
          appointmentTime: moment(modi_time).toDate(),
          appointmentDate: moment(modi_time).toDate(),
          foodCategory: props.post_info.foodCategory,
          longitude: props.post_info.longitude,
          latitude: props.post_info.latitude,
          meeting: props.post_info.meeting,
          place_url: props.post_info.place_url,
        }
      : {
          place: "",
          detail_place: "",
          restaurant: shopAddress ? shopAddress : "",
          headCount: "",
          appointmentTime: today,
          appointmentDate: today,
          foodCategory: "",
          longitude: longitude,
          latitude: latitude,
          meeting: "",
          place_url: place_url ? place_url : "",
        }
  );

  const dropdownRef = React.useRef(null);
  const shopRef = React.useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [shopActive, setShopActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };
  const onClickShop = () => {
    setShopActive(!shopActive);
  };
  const nullShop = (e) => {
    dispatch(locateActions.setShopAddress(""));
  };

  React.useEffect(() => {
    if (!post_address && props?.find_address) {
      dispatch(locateActions.getMyPostCoordAX(props.find_address));
      setPostInfo({ ...post_info, place: post_address });
      props?.onChange({ place: post_address });
    }
    if (!shopAddress && post_info?.restaurant) {
      dispatch(locateActions.setShopAddress(post_info?.restaurant));
      setPostInfo({ ...post_info, restaurant: shopAddress });
      props?.onChange({ restaurant: shopAddress });
    }
    if (!place_url && post_info?.place_url) {
      dispatch(locateActions.setPlaceUrl(post_info?.place_url));
      setPostInfo({ ...post_info, place_url: place_url });
      props?.onChange({ place_url: place_url });
    }
    logger("uploadinput 페이지", props);
    logger("uploadinput 페이지2", post_info);
    console.log(shopAddress);
  }, []);

  React.useEffect(() => {
    setPostInfo({ ...post_info, place: post_address });
    props?.onChange({ place: post_address });
  }, [post_address ? post_address : null]);

  React.useEffect(() => {
    setPostInfo({ ...post_info, restaurant: shopAddress });
    props?.onChange({ restaurant: shopAddress });
  }, [shopAddress ? shopAddress : null]);

  React.useEffect(() => {
    setPostInfo({ ...post_info, place_url: place_url });
    props?.onChange({ place_url: place_url });
  }, [place_url ? place_url : null]);

  return (
    <React.Fragment>
      <Grid padding="0 2rem">
        <Container>
          <Grid>
            <Grid flex justify_content="flex-start" align_items="center">
              <Text
                padding="2.4rem 0 0.8rem"
                color={color.bg100}
                bold2="500"
                size={fontSize.base}
              >
                만날 장소
              </Text>
            </Grid>
            <div className="container">
              <div className="menu-container">
                <nav
                  ref={dropdownRef}
                  className={`menu ${isActive ? "active" : "inactive"}`}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    zIndex: "101",
                    top: 0,
                    position: "fixed",
                  }}
                >
                  <PostAddress close={onClick} />
                </nav>
              </div>
            </div>
            <Grid
              height="fit-content"
              radius="1.2rem"
              border={border.bg40}
              padding="1.4rem 1.6rem"
              bg={color.bg20}
              margin="0 0 0.8rem"
              white_space="pre-wrap"
            >
              <Text color={color.bg80} size={fontSize.base}>
                {post_address
                  ? post_address
                  : props?.find_address
                  ? props.find_address
                  : "주소를 찾으면 자동으로 입력돼요."}
              </Text>
            </Grid>
            <FocusWithin>
              <Input
                border={border.bg40}
                padding="1.5rem 1.3rem"
                size={fontSize.base}
                color={color.bg80}
                placeholder="상세 주소 입력란"
                value={post_info.detail_place}
                _onChange={(e) => {
                  setPostInfo({ ...post_info, detail_place: e.target.value });
                  props.onChange({ detail_place: e.target.value });
                }}
              ></Input>
              <Button
                height="5rem"
                border={border.bg40}
                padding="0.3rem 0 0.3rem 0"
                margin="0.8rem 0 0"
                radius={radius.button}
                size="1.3rem"
                bg={color.bg0}
                _onClick={onClick}
                className="menu-trigger"
                cursor="t"
              >
                <Text color={color.brand100} size={fontSize.base} bold2="700">
                  주소 찾기
                </Text>
              </Button>
            </FocusWithin>
          </Grid>
          <Grid>
            <div className="container">
              <div className="shop-container">
                <nav
                  ref={shopRef}
                  className={`shop ${shopActive ? "active" : "inactive"}`}
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    zIndex: "101",
                    top: 0,
                    position: "fixed",
                  }}
                >
                  <ShopAddress close={onClickShop} />
                </nav>
              </div>
            </div>
            <Text
              padding="2.4rem 0 0.8rem"
              color={color.bg100}
              bold2="500"
              size={fontSize.base}
            >
              배달 예정 식당
            </Text>
            <FocusWithin>
              {shopAddress ? (
                <Grid
                  height="fit-content"
                  radius="1.2rem"
                  border={border.bg40}
                  padding="1.4rem 1.6rem"
                  bg={color.bg20}
                  margin="0 0 0.8rem"
                  white_space="pre-wrap"
                  is_flex
                >
                  <Text color={color.bg80} size={fontSize.base}>
                    {shopAddress}
                  </Text>
                  <IoIosCloseCircle
                    size="2.2rem"
                    color="gray"
                    cursor="pointer"
                    onClick={nullShop}
                  />
                </Grid>
              ) : (
                <Input
                  border={border.bg40}
                  padding="1.5rem 1.3rem"
                  size={fontSize.base}
                  color={color.bg80}
                  placeholder="배달 예정인 음식점을 입력해주세요."
                  value={
                    post_info?.restaurant
                      ? post_info?.restaurant
                      : shopAddress
                      ? shopAddress
                      : post_info?.restaurant
                  }
                  _onChange={(e) => {
                    setPostInfo({ ...post_info, restaurant: e.target.value });
                    props.onChange({ restaurant: e.target.value });
                  }}
                />
              )}
              <Button
                height="5rem"
                border={border.bg40}
                padding="0.3rem 0 0.3rem 0"
                margin="0.8rem 0 0"
                radius={radius.button}
                size="1.3rem"
                bg={color.bg0}
                _onClick={onClickShop}
                className="shop-trigger"
                cursor="t"
              >
                <Text color={color.brand100} size={fontSize.base} bold2="700">
                  식당 찾기
                </Text>
              </Button>
            </FocusWithin>
          </Grid>

          <FocusSelect>
            <Text
              padding="2.4rem 0 0.8rem"
              color={color.bg100}
              bold2="500"
              size={fontSize.base}
            >
              모집 인원 수
            </Text>
            <Grid border={border.bg40} radius="1.2rem" height="auto">
              <HeadSelect
                options={head_options}
                value={post_info.headCount}
                setPostInfo={setPostInfo}
                post_info={post_info}
                onChange={props.onChange}
                headCount={post_info.headCount}
              />
            </Grid>
          </FocusSelect>
          <Grid text_align="left">
            <Text
              color="#F35959"
              size={fontSize.small}
              line_height="150%"
              padding="0.8rem 1rem 0 0rem"
            >
              5인 이상 집합금지로 인원에 제한이 있습니다.
            </Text>
          </Grid>

          <Grid margin="0">
            <FocusWithin>
              <Text
                padding="2.4rem 0 0.8rem"
                color={color.bg100}
                bold2="500"
                size={fontSize.base}
              >
                만남 예정 시간
              </Text>

              <Grid display_grid="t">
                <SDatePicker
                  onFocus={(e) => (e.target.readOnly = true)} //mobile 가상키보드 방지
                  showDisabledMonthNavigation
                  theme={theme}
                  minDate={new Date()}
                  locale={ko}
                  dateFormat="yyyy년 MM월 dd일"
                  selected={post_info.appointmentDate}
                  onChange={(date) => {
                    setPostInfo({
                      ...post_info,
                      appointmentDate: date,
                    });
                    logger("현재시간", moment(date).format("YYYY-MM-DD"));

                    // 상위 컴포넌트로 데이터 보내기
                    props.onChange({
                      appointmentDate: moment(date).format("YYYY-MM-DD"),
                    });
                  }}
                  withPortal={true}
                  popperModifiers={{
                    preventOverflow: {
                      enable: true,
                    },
                  }}
                  popperPlacement="auto"
                  dayClassName={(date) =>
                    getDayName(createDate(date)) === "일" ? "sunday" : undefined
                  }
                />

                <TDatePicker
                  onFocus={(e) => (e.target.readOnly = true)} //mobile 가상키보드 방지
                  timeCaption="Time"
                  dateFormat="p"
                  timeIntervals={15}
                  showTimeSelectOnly
                  showTimeSelect
                  theme={theme}
                  locale={ko}
                  timeFormat="HH:mm"
                  selected={post_info.appointmentTime}
                  onChange={(date) => {
                    setPostInfo({
                      ...post_info,
                      appointmentTime: date,
                    });
                    logger("현재시간", moment(date).format("HH:mm"));

                    // 상위 컴포넌트로 데이터 보내기
                    props.onChange({
                      appointmentTime: moment(date).format("HH:mm"),
                    });
                  }}
                  withPortal={true}
                  popperModifiers={{
                    preventOverflow: {
                      enable: true,
                    },
                  }}
                  popperPlacement="auto"
                  calendarClassName="time-box"
                />
              </Grid>
            </FocusWithin>
          </Grid>
          <Grid text_align="left">
            <Text
              color="#F35959"
              size={fontSize.small}
              line_height="150%"
              padding="0.8rem 1rem 0 0rem"
            >
              만남 예정 시간이 지나면 홈 화면에서 모집글이 사라져요.
            </Text>
          </Grid>

          <Grid margin="0 auto 1rem">
            <FocusSelect>
              <Text
                padding="2.4rem 0 0.8rem"
                color={color.bg100}
                bold2="500"
                size={fontSize.base}
              >
                음식 카테고리
              </Text>
              <Grid border={border.bg40} radius="1.2rem" height="auto">
                <CTGSelect
                  options={food_options}
                  value={post_info.foodCategory}
                  setPostInfo={setPostInfo}
                  post_info={post_info}
                  onChange={props.onChange}
                  foodCategory={post_info.foodCategory}
                />
              </Grid>
            </FocusSelect>
          </Grid>

          <Grid margin="0 auto 1rem">
            <FocusSelect>
              <Text
                padding="2.4rem 0 0.8rem"
                color={color.bg100}
                bold2="500"
                size={fontSize.base}
              >
                모집 유형
              </Text>
              <Grid border={border.bg40} radius="1.2rem" height="auto">
                <MeetingSelect
                  options={meeting_options}
                  value={post_info.meeting}
                  setPostInfo={setPostInfo}
                  post_info={post_info}
                  onChange={props.onChange}
                  meeting={post_info.meeting}
                />
              </Grid>
            </FocusSelect>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// input 포커스 css
const FocusWithin = styled.div`
  &:focus-within p {
    color: #ff9425;
  }
  &:focus-within input {
    border: 1px solid #ff9425;
    outline: none;
  }
`;
// input 포커스 css
const FocusSelect = styled.div`
  &:focus-within p {
    color: #ff9425;
  }
`;

// 달력선택 css
const SDatePicker = styled(DatePicker)`
  width: 100%;
  height: 5rem;
  padding: 1.4rem 1.6rem;
  font-size: 1.6rem;
  text-align: left;
  border: ${(props) => props.theme.border.bg40};
  border-radius: ${(props) => props.theme.radius.button};
  cursor: pointer;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("https://image.flaticon.com/icons/png/512/32/32195.png")
    no-repeat 92% 50% #fff;
  background-size: 1rem;
`;

// 시간선택 css
const TDatePicker = styled(DatePicker)`
  width: 100%;
  height: 5rem;
  padding: 1.4rem 1.6rem;
  font-size: 1.6rem;
  text-align: left;
  border: ${(props) => props.theme.border.bg40};
  border-radius: ${(props) => props.theme.radius.button};
  cursor: pointer;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("https://image.flaticon.com/icons/png/512/992/992700.png")
    no-repeat 88% 50% #fff;
  background-size: 1.5rem;
`;

export default UploadInput;
