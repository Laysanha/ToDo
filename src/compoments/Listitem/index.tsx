import React, { useState } from 'react';
import { Item } from '../../types/item';

type Props ={
    item: Item
}

export const ListIltem = ({ item } :Props) => {
    const [isChecked, setisChecked] = useState(item.done); 

    return(
        <div className='py-2 pl-6 w-full flex gap-2'>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setisChecked(e.target.checked)}
                className="w-5 accent-pink-500"
                />
            <label className = { isChecked ? 'line-through text-stone-400' : '' }>                 
                {item.id} - { item.name } 
            </label>
        </div>
    )
}