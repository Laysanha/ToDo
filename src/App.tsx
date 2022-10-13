import { useState } from "react";
import { Item } from "./types/item";
import { ListIltem } from "./compoments/Listitem";

function App() {

  const [ lista, setLista ] = useState<Item[]>([
    { id: 1, name: 'Estudar programação', done: false },
    { id: 2, name: 'Tomar água', done: true },
    { id: 3, name: 'Jogar Dbd', done: false },
  ])

  return (
    <div className="text-2xl font-semibold m-10">
      Lista de tarefas / TO DO
      <div className="text-base font-normal border-2 border-gray-800 bg-gray-800 my-4 py-2 rounded-md">
        
        {lista.map((item, index) => (
          <ListIltem key={index} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default App