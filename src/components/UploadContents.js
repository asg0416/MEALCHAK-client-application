import React from "react";
import { Grid, Input } from "../elements";
import { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const UploadContents = (props) => {
  const {color, border, fontSize} = theme;

  const [post_info, setPostInfo] = useState({
    title: "",
    contents: "",
  });

  return (
    <React.Fragment>
      <Container>
        <Grid borderBottom={border.line2}>
          <Input
            padding="1.6rem 2rem"
            type="text"
            border="none"
            placeholder="메뉴를 포함해서 제목을 작성해보세요!"
            length={20}
            size={fontSize.base}
            color={color.bg60}
            bold="400"
            value={post_info.title}
            _onChange={(e) => {
              setPostInfo({ ...post_info, title: e.target.value });
              props.onChange({ title: e.target.value });
            }}
          ></Input>
        </Grid>
        <Grid padding='0 2rem'>
          <Input
            bold="400"
            border="none"
            size={fontSize.base}
            placeholder="어떤 음식을 함께 즐기고 싶으신가요?"
            multiLine="t"
            length="300"
            color={color.bg60}
            value={post_info.contents}
            _onChange={(e) => {
              setPostInfo({ ...post_info, contents: e.target.value });
              props.onChange({ contents: e.target.value });
            }}
          ></Input>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default UploadContents;