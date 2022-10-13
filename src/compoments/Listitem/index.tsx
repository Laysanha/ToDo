import { useState } from 'react';
import { Item } from '../../types/item';

type Props ={
    item: Item
}

export const ListIltem = ({ item } :Props) => {
    const [isChecked, setisChecked] = useState(item.done);
    
    return(
        <div className='pt-4 pl-6 flex gap-2'>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setisChecked(e.target.checked)}
                className="w-5" 
            />
            <label className={ isChecked ? 'line-through' : '' }> {item.name} </label>
        </div>
    )
}