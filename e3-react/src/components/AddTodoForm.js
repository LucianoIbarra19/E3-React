import React, { useState } from "react";

const AddTodoForm = () => {
    const [value, setValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('user entered: ' + value)
    }

    return (
        <form onSubmit={onSubmit} className="mt-3 mb-3">
            <label className="">Name</label>
            <input
                type="text"
                className="mb-2 scroll-m-2"
                placeholder="Add task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <button type="submit" className="mb-2">Submit</button>
        </form>
    )
}

export default AddTodoForm