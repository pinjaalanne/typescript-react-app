interface ToDoListProps {
    items: { id: string, text: string }[];
}

const ToDoList: React.FC<ToDoListProps> = (props) => {
    // const todos = [{
    //     id: 't1', text: 'Finish Typescript course'
    // }];
    return (
        <div className="todo-list">
            <ul>
                <h2>Todos</h2>
                {props.items.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;