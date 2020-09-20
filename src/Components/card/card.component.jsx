import React from 'react';
import './card.style.css';

const Card = (props) => (
    <div className = 'card'>
        <img alt='monster' src={props.strawhat.img}  />
        <h2> {props.strawhat.name} </h2>
        <p> {props.strawhat.post} </p>
    </div>
);

export default Card;