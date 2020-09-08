import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8f8ff;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 1px 1px 2px grey;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  color: #000;
  font-weight: 300;
`
const StyledPhoto = styled.img`
  width: 50%;
  object-fit: cover;
`
const Description = styled.p`
  color: #000;
  font-weight: 300;
`
const Button = styled.button`
  margin: 10px;
`

const Card = (props) => (
    <div style={{ color: '#000' }}>
        {props.followers.map((follow) => {
            return (
                <div key={follow.id}>
                    <Wrapper>
                        <Title>{follow.login}</Title>
                        <StyledPhoto src={follow.avatar_url} alt={follow.login} />
                        <Description>
                            User Type: {follow.type}
                            <a href={follow.url}><Button>Github page</Button></a>
                        </Description>
                    </Wrapper>
                </div>
            )
        })}
    </div>
    )

export default Card;