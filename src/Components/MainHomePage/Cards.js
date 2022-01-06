import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Users!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem className='cardsitem' 
                src="https://cdn1.iconfinder.com/data/icons/hotel-and-restaurant-1-6/128/46-512.png"
              text='Owner'
               to='/login'
            />

            <CardItem
              src="https://www.nicepng.com/png/full/149-1496994_immagine-manager-manager.png"
              text='Manager'
              to='/manager'
              
            />
          
          
            <CardItem
              src="https://www.vhv.rs/dpng/d/482-4823480_front-desk-hotel-front-desk-clipart-hd-png.png"
              text='Receptionist'
           
              to='/receptionist'
            />
           
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
