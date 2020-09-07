import React from 'react';

const CardList = (props) => {
    console.log(props.followers)
    return (
        <div className="App">
          {props.followers.map((follow) => {
            return (
                <div key={follow.id}>
                <p>{follow.id}</p>
                <p>{follow.login}</p>
                <p>{follow.type}</p>
                <p>{follow.url}</p>
             </div>
            )
          })}
        </div>
    )
}

export default CardList;