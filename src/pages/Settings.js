// 마이페이지 - 설정
import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Grid, Text } from "../elements";
import { Header, PcSide } from "../components";
import { customAlert } from "../components/Sweet";

import logger from "../shared/Console";
import theme from "../styles/theme";

const Settings = (props) => {
  const dispatch = useDispatch();
  const { color, border, fontSize } = theme;

  React.useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  return (
    <>
      <PcSide {...props} />
      <Grid minHeight="100vh" margin="0 auto">
        <Grid shape="container">
          <Header {...props} shape="설정" />
          <Grid height="4.4rem" />
          <Grid
            is_flex4="t"
            padding="1.9rem 2rem"
            borderBottom={border.bg20}
            cursor="t"
            _onClick={() => {
              dispatch(userActions.logOut());
            }}
          >
            <svg
              style={{ marginRight: "1.2rem" }}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 6.25H5V23.75H17.5"
                stroke="#36373C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 15H26.25"
                stroke="#36373C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M21.25 10L26.25 15L21.25 20"
                stroke="#36373C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Text color={color.bg100} size={fontSize.base} bold2="400">
              로그아웃
            </Text>
          </Grid>
          <Grid
            is_flex4="t"
            padding="1.9rem 2rem"
            borderBottom={border.bg20}
            cursor="t"
            _onClick={() => {
              customAlert
                .sweetOK(
                  "아직 개발 중인 기능이에요.",
                  "열심히 개발하고 있으니",
                  "조금만 기다려주세요."
                )
                .then(() => {
                  return;
                });
            }}
          >
            <svg
              style={{ marginRight: "1.2rem" }}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="15"
                cy="15"
                r="11"
                stroke="#36373C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10.0152 19.4941C10.5956 18.9914 11.3711 18.62 12.2227 18.3742C13.0821 18.1261 14.0386 18 15 18C15.9614 18 16.9179 18.1261 17.7774 18.3742C18.6289 18.62 19.4044 18.9914 19.9848 19.4941"
                stroke="#36373C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle
                cx="11.25"
                cy="12.5"
                r="1.5"
                fill="#36373C"
                stroke="#36373C"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              <circle
                cx="18.75"
                cy="12.5"
                r="1.5"
                fill="#36373C"
                stroke="#36373C"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>

            <Text color={color.bg100} size={fontSize.base} bold2="400">
              밀착 탈퇴하기
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Settings;
