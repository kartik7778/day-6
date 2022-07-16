import todos from "./Todo";
import defaut function TodoList({todos}){
    console.log (" Todos Array:" , todos)
    return(
<div>
{
    todos.map((todo)=>{
        return(
            <Todo todo={todo}/>
        )
    }
    )
}
</div>

    )   
}
 
    
