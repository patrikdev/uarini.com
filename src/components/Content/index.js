import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  max-width: 1000px;
`;

export default function Content(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}