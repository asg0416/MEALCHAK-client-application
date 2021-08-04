import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../elements';
import theme from '../styles/theme';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../shared/Swiper.scss';

import logger from '../shared/Console';

SwiperCore.use([Pagination, Navigation]);

const TutorialSwiper = (props) => {
  const { color, fontSize } = theme;

  return (
    <React.Fragment>
      <div>
        <Swiper
          className="banner"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <Grid height="42rem">
              <ElIntro src="/illust/introA_3x.png"></ElIntro>
            </Grid>
            <Grid is_fixed bottom="-28rem">
              <Text
                margin="1rem 0 1.5rem 0"
                size={fontSize.large}
                color={color.brand100}
                bold2="700"
              >
                배달은 한 번만
              </Text>
              <Text size={fontSize.base} color={color.bg80}>
                밀착에서는 함께 배달시켜 먹으니까
              </Text>
              <Text size={fontSize.base} color={color.bg80}>
                배달비 부담은 덜고 자연은 더해요!
              </Text>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid height="42rem">
              <ElIntro src="/illust/introB_3x.png"></ElIntro>
            </Grid>
            <Grid is_fixed bottom="-28rem">
              <Text
                margin="1rem 0 1.5rem 0"
                size={fontSize.large}
                color={color.brand100}
                bold2="700"
              >
                밥 친구와 함께해요!
              </Text>
              <Text size={fontSize.base} color={color.bg80}>
                3초만에 글 쓰고, 함께 배달과 식사할
              </Text>
              <Text size={fontSize.base} color={color.bg80}>
                밥 친구를 구해보세요!
              </Text>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid height="30rem">
              <ElIntro src="/illust/introC_3x.png"></ElIntro>
            </Grid>
            <Grid is_fixed bottom="-28rem">
              <Text
                margin="1rem 0 1.5rem 0"
                size={fontSize.large}
                color={color.brand100}
                bold2="700"
              >
                더 가깝게, 밀착!
              </Text>
              <Text size={fontSize.base} color={color.bg80}>
                밀착에서 사람도, 환경도
              </Text>
              <Text size={fontSize.base} color={color.bg80}>
                한 걸음 더 가까워져봐요!
              </Text>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </div>
    </React.Fragment>
  );
};

TutorialSwiper.defaultProps = {};

const ElIntro = styled.div`
  /* position: fixed; */
  background-image: url('${(props) => props.src}');
  width: 320px;
  height: 320px;
  background-size: cover;
  background-position: center center;
`;

export default TutorialSwiper;