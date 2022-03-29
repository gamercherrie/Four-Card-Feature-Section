import React from 'react';
import './Card.css';

const Card = ({title, paragraph, strip, image}) => {
    return (
        <div className="card__container">
            <div className={strip}></div>
            <div className="card__content">
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <img src={image} alt="card logo"/>
            </div>
        </div>
    );
};

export default Card;