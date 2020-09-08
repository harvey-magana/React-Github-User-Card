import React from 'react';
import styled from "styled-components";
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardList = (props) => {
    //console.log(props.followers)
    return (
        <Wrapper>
            <Card followers={props.followers} />
        </Wrapper>
    )
}

export default CardList;