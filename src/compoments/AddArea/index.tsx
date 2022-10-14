import { useState, KeyboardEvent } from "react"

type Props = {
    onEnter: (taskname: string) => void
}

export const AddArea = ({onEnter} : Props) => {
    const [inputText, setInputText] = useState('');
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return(
        <div className="p-4 py-3 border border-gray-700 rounded-2xl flex flex-row gap-2 justify-center">
            <p className="text-3xl">+</p>

            <input 
                type="text"
                placeholder="Adicione uma tarefa..."
                className="w-full h-5 p-2 rounded-md font-normal text-sm color bg-inherit focus:outline-none focus:ring focus:ring-transparent" 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </div>
    )
}