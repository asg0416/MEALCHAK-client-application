// 사이트 들어올 때 보이는 서비스 간단 소개
import React from 'react';
import styled from 'styled-components';

import { Grid, Text } from '../elements';
import { png } from '../styles/img/index';
import { webp } from '../styles/img/webp/index';

import theme from '../styles/theme';
import {isWebpSupported} from 'react-image-webp/dist/utils';


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../shared/Swiper.scss';

SwiperCore.use([Pagination, Navigation]);

const TutorialSwiper = (props) => {
  const { color, fontSize } = theme;

  return (
    <React.Fragment>    
        <Swiper
          style={{}}
          className="tutorial"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <Grid shape="container">              
              <Grid maxWidth="36rem">              
              <ElIntro src={isWebpSupported() ? webp.introA_3xWebp : png.introA_3x} loading="lazy" alt="intro"/>            
              </Grid>              
              <Grid>
                <Text
                  margin="1rem 0 0.8rem 0"
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
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid shape="container">
              <Grid maxWidth="36rem">
              <ElIntro src={isWebpSupported() ? webp.introB_3xWebp : png.introB_3x} loading="lazy" alt="intro"/>            
              </Grid>
              <Grid>
                <Text
                  margin="1rem 0 0.8rem 0"
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
            </Grid>
          </SwiperSlide>

          <SwiperSlide>
            <Grid shape="container">
              <Grid>
              <ElIntro src={isWebpSupported() ? webp.introC_3xWebp : png.introC_3x} loading="lazy" alt="intro"/>          
              </Grid>
              <Grid>
                <Text
                  margin="1rem 0 0.8rem 0"
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
            </Grid>
          </SwiperSlide>
        </Swiper>      
    </React.Fragment>
  );
};

TutorialSwiper.defaultProps = {};

const ElIntro = styled.img`
  max-width: 32rem;
  width: 32rem;
  height: 32rem;
  /* vertical-align: middle; */
  @media (min-aspect-ratio: 5/7) and (max-height: 780px) and (max-width: 600px) {
    width: 27rem;
    height: 27rem;
  }
  @media (min-aspect-ratio: 5/7) and (max-height: 780px) and (max-width: 800px) {
    width: 24rem;
    height: 24rem;
  }
  @media (min-aspect-ratio: 5/7) and (max-height: 780px) and (min-width: 800px) {
    width: 23rem;
    height: 23rem;
  }
`;

export default TutorialSwiper;
