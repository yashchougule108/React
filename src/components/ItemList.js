import React from 'react'
import { CDN_Url } from '../utils/Constants';

const ItemList = ({items}) => {
    //console.log(items);
  return (
    <div>
        {items.map((item)=>
        <div key={item.card.info.id} className='p-2 m-2 border-b-2 text-left flex justify-between'>

            <div className='w-9/12'>
                <div className='py-2'>
                    <span>{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                </div>
                    <p>{item.card.info.description}</p>
            </div>
            <div className='w-3/12'>
                <div className='absolute '>
                <button className=' px-4 mx-4 my-4 py-1 bg-black text-white m-auto rounded-lg'>Add +</button>
                </div>
                <img className=' w-full p-4' src={CDN_Url+item.card.info.imageId}></img>
                
            </div>
        </div>)}
    </div>
  )
}

export default ItemList;
