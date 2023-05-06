import React from "react";

const TodoItem = ({ id, title, completed }) => {
    return (
        <li className="list-item">
            <div className="flex justify-between">
                <span className="flex items-center">
                    <input type="checkbox" className="mr-3" checked={completed}></input>
                    {title}
                </span>
                <button className="">Delete</button>
            </div>
        </li>
    )
}

export default TodoItem