import React from 'react';
import plantDatas from './PlantDatas';
import './ShoppingList.css'

const ShoppingList = () => {

  return (
    <div>
      <ul className='lmj-plant-list'>
        {plantDatas.map( (plant)=> (
          <li key={plant.id} className='lmj-plant-item'>
            {plant.name}
            {plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
            {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList;