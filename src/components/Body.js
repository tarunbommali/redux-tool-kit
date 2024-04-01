// Body.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const menuList = [
    {
        name: "biriyani",
        price: 200
    },
    {
        name: "puri",
        price: 20
    },
    {
        name: "chicken",
        price: 220
    }
];

export default function Body() {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item)); // Dispatching the addItem action with the specific item's name
    };

    return (
        <div className='route'>
            <ul className='menu-list-container'>
                {menuList.map((item, index) => (
                    <li className='menu-item' key={index}>
                        <span>
                            {item.name} - {item.price}Rs
                        </span>
                        <button onClick={() => handleAddItem(item)}>Add Item</button> {/* Passing the item's name as an argument */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
