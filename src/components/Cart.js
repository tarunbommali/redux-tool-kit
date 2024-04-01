import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  // Calculate total item price
  const totalItemPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Total amount to pay including delivery tip
  const deliveryTip = 0; // You can set a default delivery tip here
  const totalAmountToPay = totalItemPrice + deliveryTip;

  return (
    <div className='route'>
      <div className='cart-container'>
        <h4 className='cart-title '>Cart</h4>
        <ul className='bill-list'>
          {cartItems.map((item, index) => (
            <li key={index} className='bill-item'>
              {item.name} - {item.price} Rs
            </li>
          ))}
        </ul>

      </div>
      
      <div className='bill-details'>
          <h4>Bill Details</h4>
          <ul className='bill-list'>
            <li className='bill-item' >
                Item Total  <p>{totalItemPrice} Rs</p>
            </li>
            <li className='bill-item'>
                Delivery Tip  <p>{deliveryTip} Rs</p>
            </li>
            <hr/>
            <li className='bill-item'>
                To Pay  <p>{totalAmountToPay} Rs</p>
            </li>
          </ul>
        </div>
    </div>
  );
}
