import { useState } from "react";
import { Item } from "./types/item";
import { ListIltem } from "./compoments/Listitem";
import { AddArea } from "./compoments/AddArea";

function App() {
  const [ lista, setLista ] = useState<Item[]>([
    { id: 1, name: 'Estudar programação', done: false },
    { id: 2, name: 'Tomar água', done: true },
    { id: 3, name: 'Jogar Dbd', done: false },
  ])

  const handleAddTask = (taskname: string) => {
    let newList = [...lista];
    newList.push({
        id: lista.length + 1,
        name: taskname,
        done: false
    });
    setLista(newList);
  }

  return (
    <div className="text-2xl font-semibold m-10 flex flex-col gap-4">
      
      <p>Lista de tarefas / TO DO</p>

      <AddArea onEnter = {handleAddTask}/>

      <div className="w-full text-base font-normal border-2 border-gray-800 bg-gray-800 my-4 py-2 rounded-md">
        {lista.map((item, index) => (
          <ListIltem key={index} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default App
