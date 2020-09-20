import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

const CardList = (props) => (
    <div className = 'card-list'>
        {
            props.strawhats.map(strawhat => (
                <Card key = {strawhat.id} strawhat = {strawhat} />
            ))
        }
    </div>
);

export default CardList;