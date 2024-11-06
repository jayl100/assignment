import React, {useState} from "react";
import { Button } from "react-bootstrap";

// interface 대신 type를 사용하는 이유
// 새로운 객체의 구조를 잡을 때 interface를 사용
// 지금은 아니기에 type 사용 (간단한 구조 속성이기에)
type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

const Todolist: React.FC = () => {
    const title: string = "오늘 할일"

    // 구조 분해 할당
    const [todos, setTodos] = useState<Todo[]>(
        [
            {id: 1, text: '공부하기', isChecked: false},
            {id: 2, text: '놀기', isChecked: false},
            {id: 3, text: '자기', isChecked: false}
        ]
    )

    const [newTodo, setNewTodo] = useState<string>('')

    const handleCheckedChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) => item.id === itemId ? {...item, isChecked: !item.isChecked} : item))
    }

    const addTodoHandler = () => {
        if(newTodo.trim()) {
            setTodos([...todos, {id : Date.now(), text : newTodo, isChecked : false}])
            setNewTodo('');
        }
    }

    return (
        <>
            <div className="container">
                <h1>{title}</h1>

                <div>
                    <input className="todo_input" type="text"
                           placeholder="오늘 할일을 입력해주세요."
                           onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <Button variant="primary" onClick={addTodoHandler}>등록</Button>
                </div>

                <div className="board">
                    <ul>
                        {
                            todos.map((todo, index) => (
                                <li className="todo_text" key={todo.id}>
                                    <input type="checkbox" onChange={() => {
                                        handleCheckedChange(todo.id)
                                    }}></input>
                                    <span>
                                        {
                                            todo.isChecked ?
                                                <del>{todo.text}</del> :
                                                <span>{todo.text}</span>
                                        }
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todolist;