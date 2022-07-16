export default function Header(){
    return(
        <header className="bg-blue-500  ">
            <div className="flex justify-between h-14 max-w-5xl mx-auto px-6">

                 <h3 className="text-white text-2xl font-bold mt-2.5">  Soft Todo </h3>

                <button className="bg-white px-3 py-2 rounded shadow-md hover:bg-blue-200">
                         Add New
                 </button>
                
                </div>
        </header>
    );
} 