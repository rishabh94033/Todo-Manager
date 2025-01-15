export default function  Appbar(){
    return(
        
             <div className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">My Todos</h1>
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                New
            </button>
        </div>
        
    )
}