//import { useState } from 'react'
import "./Card.css"

const produceItems = [
    { plu: 4799, itemName: 'Beefsteak Tomato', image: 'src/assets/hothousetomato.jpg' },
    { plu: 4046, itemName: 'Avocado', image: 'src/assets/avocado.jpg'},
    { plu: 4011, itemName: 'Banana', image: 'src/assets/banana.jpg'},
    { plu: 4028, itemName: 'Strawberries', image: 'src/assets/strawberries.webp'},
    { plu: 4045, itemName: 'Cherries', image: 'src/assets/cherries.jpg'},
    { plu: 2101, itemName: 'Blueberries', image: 'src/assets/blueberries.jpg'},
    { plu: 4134, itemName: 'Gala Apple', image: 'src/assets/galaapple.jpg'},
    { plu: 3283, itemName: 'Honeycrisp Apple', image: 'src/assets/honeycrispapple.jpg'}
];

function Card() {

    return (
        <div className="card-container">
            {produceItems.map(item => (
                <div className="card">
                    <div id="card-picture">
                        <img src={item.image} alt={`${item.itemName}`}/>
                    </div>
                    <h3>{item.plu}</h3>
                    <p>{item.itemName}</p>
                </div>
            ))}
        </div>
    )
}

export default Card
