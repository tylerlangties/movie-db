import React from 'react';
import styled from 'styled-components';

const Loading = () => (
  <LoadingContainer>
    <img src={require('../img/grid-loader.svg')} alt="Loading..." />
  </LoadingContainer>
);

export default Loading;

const LoadingContainer = styled.div`
  padding-top: 25vh;
`;
