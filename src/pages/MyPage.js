import React from "react";
import { useState } from "react";
import logger from "../shared/Console";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postAction } from "../redux/modules/post";
import { Kakao_auth_url } from "../shared/OAuth";

// style
import { Button, Grid, Text } from "../elements";
import { UploadInput, UploadContents, Header, Footer } from "../components";
import theme from "../styles/theme";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const [post_info, setPostInfo] = useState({});

  const { color, border, radius, fontSize } = theme;

  if (is_login) {
    return (
      <Grid maxWidth="36rem" border={border.line1} margin="0 auto">
        <Grid shape="container">
          <Header {...props} shape="마이페이지" />
          <Footer {...props}></Footer>
        </Grid>
        <Grid width="36rem" height="12rem" margin="0 auto" is_flex2>
          <svg
            style={{ position: "absolute" }}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#C4C4C4" />
          </svg>
          <svg
            style={{ position: "absolute", margin: "2.4rem 0 0 4rem" }}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="14.5" fill="white" stroke="#CECAC7" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.8541 11C6.83011 11 6 11.8301 6 12.8541V17.8571C6 19.8619 6 20.8643 6.45983 21.5961C6.69961 21.9777 7.02229 22.3004 7.4039 22.5402C8.13571 23 9.1381 23 11.1429 23H18.8571C20.8619 23 21.8643 23 22.5961 22.5402C22.9777 22.3004 23.3004 21.9777 23.5402 21.5961C24 20.8643 24 19.8619 24 17.8571V12.8541C24 11.8301 23.1699 11 22.1459 11C21.4436 11 20.8016 10.6032 20.4875 9.97508L19.6667 8.33333L19.6666 8.33329C19.5567 8.1134 19.5017 8.00345 19.4394 7.90782C19.1141 7.40882 18.5833 7.08078 17.9915 7.01299C17.8781 7 17.7552 7 17.5093 7H12.4907C12.2448 7 12.1219 7 12.0085 7.01299C11.4167 7.08078 10.8859 7.40882 10.5606 7.90782C10.4983 8.00346 10.4433 8.11342 10.3333 8.33333L9.51246 9.97508C9.19839 10.6032 8.55638 11 7.8541 11ZM17 16C17 17.1046 16.1046 18 15 18C13.8954 18 13 17.1046 13 16C13 14.8954 13.8954 14 15 14C16.1046 14 17 14.8954 17 16ZM19 16C19 18.2091 17.2091 20 15 20C12.7909 20 11 18.2091 11 16C11 13.7909 12.7909 12 15 12C17.2091 12 19 13.7909 19 16Z"
              fill="#CECAC7"
            />
          </svg>
          {/* <svg
            style={{ position: "absolute", marginTop: "7rem" }}
            width="89"
            height="14"
            viewBox="0 0 89 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12.224C5.72533 12.224 6.37067 12.1227 6.936 11.92C7.50133 11.7067 7.98133 11.376 8.376 10.928C8.77067 10.48 9.06933 9.904 9.272 9.2C9.47467 8.496 9.576 7.65333 9.576 6.672V0.16H7.304V6.88C7.304 7.49867 7.25067 8.02133 7.144 8.448C7.03733 8.864 6.88267 9.2 6.68 9.456C6.47733 9.712 6.232 9.89867 5.944 10.016C5.66667 10.1227 5.352 10.176 5 10.176C4.648 10.176 4.33333 10.1227 4.056 10.016C3.77867 9.89867 3.544 9.712 3.352 9.456C3.16 9.2 3.01067 8.864 2.904 8.448C2.808 8.02133 2.76 7.49867 2.76 6.88V0.16H0.392V6.672C0.392 7.65333 0.493333 8.496 0.696 9.2C0.909333 9.904 1.21333 10.48 1.608 10.928C2.01333 11.376 2.49867 11.7067 3.064 11.92C3.64 12.1227 4.28533 12.224 5 12.224ZM14.6328 12.224C15.2194 12.224 15.7314 12.1493 16.1688 12C16.6168 11.8507 16.9901 11.648 17.2888 11.392C17.5874 11.136 17.8114 10.8373 17.9608 10.496C18.1208 10.1547 18.2008 9.78667 18.2008 9.392C18.2008 8.976 18.1261 8.624 17.9768 8.336C17.8274 8.03733 17.6301 7.78667 17.3848 7.584C17.1501 7.38133 16.8834 7.21067 16.5848 7.072C16.2968 6.93333 16.0034 6.80533 15.7048 6.688C15.4701 6.60267 15.2408 6.52267 15.0168 6.448C14.8034 6.36267 14.6114 6.272 14.4408 6.176C14.2701 6.08 14.1314 5.97333 14.0248 5.856C13.9288 5.73867 13.8808 5.6 13.8808 5.44C13.8808 5.184 13.9768 4.976 14.1688 4.816C14.3608 4.656 14.6594 4.576 15.0648 4.576C15.4061 4.576 15.7314 4.65067 16.0408 4.8C16.3608 4.93867 16.6808 5.12 17.0008 5.344L18.0568 3.92C17.6834 3.64267 17.2461 3.392 16.7448 3.168C16.2541 2.93333 15.6728 2.816 15.0008 2.816C14.4994 2.816 14.0408 2.88533 13.6248 3.024C13.2194 3.152 12.8728 3.33867 12.5848 3.584C12.2968 3.82933 12.0728 4.12267 11.9128 4.464C11.7528 4.79467 11.6728 5.16267 11.6728 5.568C11.6728 5.94133 11.7474 6.26667 11.8968 6.544C12.0461 6.82133 12.2381 7.06667 12.4728 7.28C12.7074 7.48267 12.9688 7.65867 13.2568 7.808C13.5448 7.94667 13.8328 8.06933 14.1208 8.176C14.3554 8.272 14.5848 8.368 14.8088 8.464C15.0328 8.54933 15.2301 8.64533 15.4008 8.752C15.5821 8.848 15.7261 8.96 15.8328 9.088C15.9394 9.20533 15.9928 9.34933 15.9928 9.52C15.9928 9.79733 15.8861 10.0267 15.6728 10.208C15.4701 10.3787 15.1448 10.464 14.6968 10.464C14.2808 10.464 13.8754 10.3787 13.4808 10.208C13.0968 10.0373 12.7021 9.79733 12.2968 9.488L11.2248 10.96C11.6728 11.3333 12.2008 11.6373 12.8088 11.872C13.4168 12.1067 14.0248 12.224 14.6328 12.224ZM23.7226 12.224C24.2986 12.224 24.8533 12.1387 25.3866 11.968C25.92 11.7867 26.4106 11.5413 26.8586 11.232L26.0586 9.792C25.7386 9.99467 25.4133 10.1493 25.0826 10.256C24.7626 10.3627 24.416 10.416 24.0426 10.416C23.3706 10.416 22.8106 10.2293 22.3626 9.856C21.9253 9.472 21.6586 8.912 21.5626 8.176H27.0826C27.1146 8.06933 27.1413 7.92 27.1626 7.728C27.184 7.52533 27.1946 7.31733 27.1946 7.104C27.1946 6.48533 27.1146 5.91467 26.9546 5.392C26.7946 4.86933 26.5546 4.416 26.2346 4.032C25.9253 3.648 25.536 3.34933 25.0666 3.136C24.608 2.92267 24.0693 2.816 23.4506 2.816C22.9173 2.816 22.4 2.928 21.8986 3.152C21.3973 3.36533 20.9493 3.68 20.5546 4.096C20.1706 4.50133 19.8613 4.99733 19.6266 5.584C19.392 6.16 19.2746 6.81067 19.2746 7.536C19.2746 8.272 19.3866 8.93333 19.6106 9.52C19.8453 10.096 20.16 10.5867 20.5546 10.992C20.96 11.3867 21.4346 11.6907 21.9786 11.904C22.5226 12.1173 23.104 12.224 23.7226 12.224ZM25.1786 6.624H21.5306C21.616 5.97333 21.8453 5.48267 22.2186 5.152C22.592 4.81067 23.0133 4.64 23.4826 4.64C24.0586 4.64 24.4853 4.82133 24.7626 5.184C25.04 5.536 25.1786 6.016 25.1786 6.624ZM30.8915 3.04H28.9715V12H31.3075V6.656C31.5635 6.00533 31.8835 5.552 32.2675 5.296C32.6515 5.02933 33.0195 4.896 33.3715 4.896C33.5528 4.896 33.7128 4.90667 33.8515 4.928C34.0008 4.94933 34.1502 4.98667 34.2995 5.04L34.7155 3.008C34.5768 2.95467 34.4275 2.912 34.2675 2.88C34.1075 2.83733 33.9048 2.816 33.6595 2.816C33.1795 2.816 32.7155 2.97067 32.2675 3.28C31.8302 3.58933 31.4462 4.03733 31.1155 4.624H31.0515L30.8915 3.04ZM43.3803 11.728H34.7403V13.104H43.3803V11.728ZM47.3064 0.16H44.8904V12H47.1304V7.248C47.1304 6.56533 47.093 5.86667 47.0184 5.152C46.9544 4.43733 46.8957 3.76 46.8424 3.12H46.9224L48.1224 5.664L51.5464 12H53.9464V0.16H51.7064V4.88C51.7064 5.552 51.7384 6.256 51.8024 6.992C51.877 7.728 51.9464 8.40533 52.0104 9.024H51.9304L50.7464 6.464L47.3064 0.16ZM58.7308 12.16C59.2428 12.16 59.7228 12.064 60.1708 11.872C60.6294 11.68 61.0508 11.4187 61.4348 11.088H61.4828L61.6588 12H63.5788V6.768C63.5788 4.13333 62.4321 2.816 60.1388 2.816C59.4348 2.816 58.7574 2.91733 58.1068 3.12C57.4668 3.32267 56.9014 3.57333 56.4108 3.872L57.1148 5.552C57.5201 5.28533 57.9468 5.07733 58.3948 4.928C58.8534 4.77867 59.2908 4.704 59.7068 4.704C60.3894 4.704 60.8268 4.84267 61.0188 5.12C61.2001 5.504 61.2694 5.88267 61.2268 6.256C59.3708 6.30933 58.0321 6.60267 57.2108 7.136C56.4001 7.65867 56.0214 8.46933 56.0748 9.568C56.0748 9.952 56.1388 10.304 56.2668 10.624C56.3948 10.944 56.5708 11.2213 56.7948 11.456C57.0294 11.68 57.3121 11.856 57.6428 11.984C57.9734 12.1013 58.3361 12.16 58.7308 12.16ZM59.4508 10.368C59.1094 10.368 58.8214 10.2613 58.5868 10.048C58.3628 9.83467 58.2454 9.54133 58.2348 9.168C58.2241 8.848 58.3201 8.57067 58.5228 8.336C58.7361 8.10133 59.0988 7.94667 59.6108 7.872C59.8668 7.82933 60.1281 7.79733 60.3948 7.776C60.6721 7.744 60.9494 7.71733 61.2268 7.696V9.504C60.9494 9.78133 60.6668 9.99467 60.3788 10.144C60.1014 10.2827 59.7921 10.3573 59.4508 10.368ZM67.7359 3.04H65.8159V12H68.1519V5.84C68.7919 5.168 69.3679 4.832 69.8799 4.832C70.3065 4.832 70.6212 4.97067 70.8239 5.248C71.0265 5.51467 71.1279 6 71.1279 6.704V12H73.4799V5.84C74.1199 5.168 74.6959 4.832 75.2079 4.832C75.6345 4.832 75.9492 4.97067 76.1519 5.248C76.3545 5.51467 76.4559 6 76.4559 6.704V12H78.8079V6.416C78.8079 5.28533 78.5839 4.40533 78.1359 3.776C77.6879 3.136 76.9839 2.816 76.0239 2.816C75.4372 2.816 74.9145 2.96533 74.4559 3.264C74.0079 3.56267 73.5812 3.936 73.1759 4.384C72.9625 3.872 72.6585 3.48267 72.2639 3.216C71.8692 2.94933 71.3519 2.816 70.7119 2.816C70.1252 2.816 69.6132 2.95467 69.1759 3.232C68.7385 3.50933 68.3332 3.84533 67.9599 4.24H67.8959L67.7359 3.04ZM84.9658 12.224C85.5418 12.224 86.0964 12.1387 86.6298 11.968C87.1631 11.7867 87.6538 11.5413 88.1018 11.232L87.3018 9.792C86.9818 9.99467 86.6564 10.1493 86.3258 10.256C86.0058 10.3627 85.6591 10.416 85.2858 10.416C84.6138 10.416 84.0538 10.2293 83.6058 9.856C83.1684 9.472 82.9018 8.912 82.8058 8.176H88.3258C88.3578 8.06933 88.3844 7.92 88.4058 7.728C88.4271 7.52533 88.4378 7.31733 88.4378 7.104C88.4378 6.48533 88.3578 5.91467 88.1978 5.392C88.0378 4.86933 87.7978 4.416 87.4778 4.032C87.1684 3.648 86.7791 3.34933 86.3098 3.136C85.8511 2.92267 85.3124 2.816 84.6938 2.816C84.1604 2.816 83.6431 2.928 83.1418 3.152C82.6404 3.36533 82.1924 3.68 81.7978 4.096C81.4138 4.50133 81.1044 4.99733 80.8698 5.584C80.6351 6.16 80.5178 6.81067 80.5178 7.536C80.5178 8.272 80.6298 8.93333 80.8538 9.52C81.0884 10.096 81.4031 10.5867 81.7978 10.992C82.2031 11.3867 82.6778 11.6907 83.2218 11.904C83.7658 12.1173 84.3471 12.224 84.9658 12.224ZM86.4218 6.624H82.7738C82.8591 5.97333 83.0884 5.48267 83.4618 5.152C83.8351 4.81067 84.2564 4.64 84.7258 4.64C85.3018 4.64 85.7284 4.82133 86.0058 5.184C86.2831 5.536 86.4218 6.016 86.4218 6.624Z"
              fill="#36373C"
            />
          </svg> */}
          <Grid width="9rem" height="3rem" absolute="absolute" top="16rem">
            <Text
              width="9rem"
              size={fontSize.base}
              color={color.bg100}
              bold
              line_height="150%"
              text_align="center"
              overflow="hidden"
              text_overflow="ellipsis"
              white_space="nowrap"
              display="block"
            >
              user_name
            </Text>
          </Grid>
          <svg
            style={{ position: "absolute", margin: "6.8rem 0 0 5.5rem" }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.204 10.7962L19 9.00019C19.5453 8.45494 19.8179 8.18231 19.9636 7.88822C20.2409 7.32866 20.2409 6.67171 19.9636 6.11215C19.8179 5.81806 19.5453 5.54544 19 5.00019C18.4548 4.45494 18.1821 4.18231 17.888 4.03658C17.3285 3.75929 16.6715 3.75929 16.112 4.03658C15.8179 4.18231 15.5453 4.45494 15 5.00019L13.1814 6.81884C14.1452 8.46944 15.5314 9.845 17.204 10.7962ZM11.7269 8.2733L4.8564 15.1438C4.43134 15.5689 4.21881 15.7814 4.07907 16.0425C3.93934 16.3036 3.88039 16.5983 3.7625 17.1878L3.1471 20.2648C3.08058 20.5974 3.04732 20.7637 3.14193 20.8583C3.23654 20.9529 3.40284 20.9196 3.73545 20.8531L6.81243 20.2377C7.40189 20.1198 7.69661 20.0609 7.95771 19.9211C8.21881 19.7814 8.43134 19.5689 8.8564 19.1438L15.7458 12.2544C14.1241 11.2388 12.7524 9.87646 11.7269 8.2733Z"
              fill="#CECAC7"
            />
          </svg>
          <Grid
            width="36rem"
            height="1.6rem"
            bg={color.bg20}
            absolute="absolute"
            top="22rem"
          />
        </Grid>
        <svg
          style={{ position: "absolute", margin: "10rem 0 0 3rem" }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#EBE9E8" />
        </svg>
        <Grid width="9rem" height="3rem" absolute="absolute" top="26.5rem" margin="0 0 0 6.2rem">
          <Text
            width="7rem"
            height="2.4rem"
            size={fontSize.base}
            color={color.bg100}
            line_height="150%"
            text_align="center"
          >
            내가 쓴 글
          </Text>
        </Grid>
        <svg
          style={{ position: "absolute", margin: "15rem 0 0 3rem" }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="15" fill="#EBE9E8" />
        </svg>
        <Grid width="9rem" height="3rem" absolute="absolute" top="31.5rem" margin="0 0 0 4.5rem">
          <Text
            width="6.6rem"
            height="2.4rem"
            size={fontSize.base}
            color={color.bg100}
            line_height="150%"
            text_align="center"
          >
            설정
          </Text>
        </Grid>
        <Grid height="40.1rem" />
      </Grid>
      
    );
  } else {
    return (
      <Grid
        // height="100vh"
        maxWidth="36rem"
        border={border.line1}
        margin="0 auto"
      >
        <Grid shape="container">
          <Text>로그인 이후 이용가능한 서비스입니다.</Text>
          <Grid
            height="auto"
            maxWidth="35.5rem"
            margin="0 auto"
            padding="2.8rem 2rem 2.7rem"
            is_fixed="t"
            bg={color.bg0}
          >
            <Button
              shape="large"
              color="#FEE500"
              _onClick={() => {
                window.location.href = `${Kakao_auth_url}`;
              }}
            >
              <Grid is_flex4="t" height="4.4rem">
                <svg
                  style={{ position: "absolute", marginLeft: "1.9rem" }}
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.9"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0C4.029 0 0 3.13 0 6.989C0.063509 8.21942 0.463823 9.40875 1.15723 10.4272C1.85063 11.4456 2.81048 12.254 3.93201 12.764L2.93201 16.431C2.914 16.5032 2.91832 16.5792 2.9444 16.6489C2.97048 16.7187 3.01708 16.7788 3.07806 16.8215C3.13905 16.8642 3.21157 16.8874 3.28601 16.888C3.36045 16.8886 3.4333 16.8667 3.495 16.825L7.87201 13.925C8.24201 13.961 8.61702 13.982 8.99902 13.982C13.969 13.982 17.999 10.853 17.999 6.993C17.999 3.133 13.969 0.0039978 8.99902 0.0039978"
                    fill="black"
                  />
                </svg>
                <Text margin="auto" size={fontSize.base} bold2="700">
                  카카오 로그인
                </Text>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

MyPage.defaultProps = {};

export default MyPage;
