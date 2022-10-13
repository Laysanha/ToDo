import { useState } from 'react';
import { Item } from '../../types/item';

type Props ={
    item: Item
}

export const ListIltem = ({ item } :Props) => {
    const [isChecekd, setisChecekd] = useState(item.done);

    return(
        <div className='pt-4 pl-6 gap-2 flex checked:line-through'>
            <input 
                type="checkbox" 
                checked={isChecekd}
                onChange={e => setisChecekd(e.target.checked)}
                className="w-6" 
            />
            <label> {item.name} </label>
        </div>
    )
}