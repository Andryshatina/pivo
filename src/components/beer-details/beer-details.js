import React from "react";
import './beer-details.css';

const BeerDetails= ({currentBeer}) => {
    const { title, description, imgUrl} = currentBeer;
    if (!title){
        return(
            <div className='select-pivo'>
                Вибери Pivas!
            </div>
        )
    }
    return(
        <div className='item-details jumbotron d-flex rounded'>
            <img className='item-image'
                 src={imgUrl}
                 alt='item'/>
            <div>
                <h4 className='item-name'>{title}</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='description'>{description}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BeerDetails;