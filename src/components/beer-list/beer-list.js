import React from "react";
import './beer-list.css';

const BeerList = ({allBeer, getSomeBeer}) => {
    return (
        <ul className='item-list list-group'>
            {
                allBeer.map((beer) => {
                    const {id, title} = beer;
                    return (
                        <li className='list-group-item beer-list'
                            key={id}
                            onClick={() => getSomeBeer(id)}
                        >
                            <span className='term'>{title}</span>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default BeerList;