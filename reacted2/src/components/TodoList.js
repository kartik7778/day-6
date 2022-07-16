export default function TodoList ({todo}){
    return ( 
        <div className="max-w-5xl mx-auto flex justify-between px-8 py-4 bg-blue-100 mt-9 rounded-2xl"> 
            <div>
                <h2 className="text-2xl font-bold"> Title </h2>
                <p> Description  </p>
                <button> <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6" fill="none"
                              viewBox="0 0 24 24"
                               stroke="currentColor"
                                strokeWidth={2}>
            <path strokeLinecap="round"
            strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
                <button> <svg xmlns="http://www.w3.org/2000/svg" 
                                class="h-6 w-6" fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                stroke-width="2">
             <path stroke-linecap="round"
                stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
</button>

            </div>
            <div> 
                <h3 className="bg-blue-300 p-2 rounded hover:bg-gray-300 "> Category</h3>
                <h4 className="flex">
                     Done:
                     <svg xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                       fill="none"
                        viewBox="0 0 24 24"
                         stroke="currentColor"
                          stroke-width="2">
             <path stroke-linecap="round"
             stroke-linejoin="round" 
                 d="M5 13l4 4L19 7" />
</svg>
                </h4>
                <h4>DateTime  </h4>
            </div>

        </div>
    )
}