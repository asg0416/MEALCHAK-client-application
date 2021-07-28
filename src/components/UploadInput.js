import React from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { useState } from "react";
import theme from "../styles/theme";

const UploadInput = (props) => {
  const {color, fontSize} = theme;

  const [post_info, setPostInfo] = useState({
    place: "",
    restaurant: "",
    headCount: "",
    appointmentTime: "",
    foodCategory: "",
  });

  return (
    <React.Fragment>
      <Grid padding="0 2rem">
        <Container>
          <Grid>
            <Text
              padding="2.4rem 0 0.8rem"
              color={color.bg80}
              bold="700"
              size={fontSize.base}
            >
              모집 장소
            </Text>
            <Input
              border="1px solid #C7C8CE"
              padding="1.5rem 1.3rem"
              size={fontSize.base}
              color={color.bg60}
              placeholder="모일 장소를 입력해주세요."
              value={post_info.place}
              _onChange={(e) => {
                setPostInfo({ ...post_info, place: e.target.value });
                props.onChange({ place: e.target.value });
              }}
            ></Input>
          </Grid>
          <Grid>
            <Text
              padding="2.4rem 0 0.8rem"
              color="#888E95"
              bold="700"
              size={fontSize.base}
            >
              배달 예정 음식점
            </Text>
            <Input
              border="1px solid #C7C8CE"
              padding="1.5rem 1.3rem"
              size={fontSize.base}
              color={color.bg60}
              placeholder="배달 예정인 음식점을 입력해주세요."
              value={post_info.restaurant}
              _onChange={(e) => {
                setPostInfo({ ...post_info, restaurant: e.target.value });
                props.onChange({ restaurant: e.target.value });
              }}
            ></Input>
          </Grid>
          <Text
            padding="2.4rem 0 0.8rem"
            color="#888E95"
            bold="700"
            size={fontSize.base}
          >
            모집 인원 수
          </Text>
          <Input
            type="number"
            min="0"
            border="1px solid #C7C8CE"
            padding="1.5rem 1.3rem"
            size={fontSize.base}
            color={color.bg60}
            placeholder="모집할 인원 수를 입력해주세요."
            value={`${post_info.headCount}`}
            _onChange={(e) => {
              setPostInfo({ ...post_info, headCount: e.target.value });
              props.onChange({ headCount: e.target.value });
            }}
          ></Input>
          <Grid>
            <Text
              padding="2.4rem 0 0.8rem"
              color="#888E95"
              bold="700"
              size={fontSize.base}
            >
              모집 예정 시간
            </Text>
            <Input
              type="time"
              border="1px solid #C7C8CE"
              padding="1.5rem 1.3rem"
              size={fontSize.base}
              color={color.bg60}
              value={post_info.appointmentTime}
              _onChange={(e) => {
                setPostInfo({
                  ...post_info,
                  appointmentTime: e.target.value,
                });
                props.onChange({ appointmentTime: e.target.value });
              }}
            ></Input>
          </Grid>
          <Grid margin="0 auto 1rem">
            <Text
              padding="2.4rem 0 0.8rem"
              color="#888E95"
              bold="700"
              size={fontSize.base}
            >
              음식 카테고리
            </Text>
            <Grid
              border="1px solid #C7C8CE"
              padding="0 1.3rem"
              radius="1.2rem"
              height="auto"
            >
              <Select
                value={post_info.foodCategory}
                onChange={(e) => {
                  setPostInfo({
                    ...post_info,
                    foodCategory: e.target.value,
                  });
                  props.onChange({ foodCategory: e.target.value });
                }}
              >
                <option value="" disabled defaultValue hidden>
                  음식 카테고리를 선택해주세요.
                </option>
                <option value="한식">한식</option>
                <option value="중식">중식</option>
                <option value="일식">일식</option>
                <option value="양식">양식</option>
                <option value="카페">카페</option>
                <option value="기타">기타</option>
              </Select>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  width: 100%;
  height: 4.7rem;
  border: none;
  padding: 0;
  font-size: 1.4rem;
  &:focus {
    outline: none;
  }
`;

export default UploadInput;