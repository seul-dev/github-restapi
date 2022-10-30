import React from 'react';
import styled from 'styled-components';
import Img from '../../lib/images/adImg.webp';

const AdBanner = () => {
  return (
    <Wrapper>
      <a href='https://www.wanted.co.kr/' target='_blank' rel='noreferrer'>
        <AdImage src={Img} alt='wanted-ad-img' />
      </a>
    </Wrapper>
  );
};

export default AdBanner;

const Wrapper = styled.div`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 2rem;
  margin: 0.8rem auto;
`;

const AdImage = styled.img`
  height: 3rem;
  margin: auto;
`;
