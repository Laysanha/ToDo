export const AddArea = () => {
    return(
        <div className="p-4 py-3 border border-gray-700 rounded-2xl flex flex-row gap-2 justify-center">
            <p className="text-3xl">+</p>

            <input 
                type="text"
                placeholder="Adicione uma tarefa..."
                className="w-full h-5 p-2 rounded-md font-normal text-sm color text-gray-700 border-double  border-2 border-gray-800" 
            />
        </div>
    )
}