const ToDoList: React.FC = () => {
    const todos = [{
        id: 't1', text: 'Finish Typescript course'
    }];
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    )
}

export default ToDoList;