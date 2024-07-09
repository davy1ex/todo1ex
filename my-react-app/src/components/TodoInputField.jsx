// eslint-disable-next-line no-unused-vars
import React from 'React'

function TodoInputField ({text, handleInput, handleSubmit}) {
    return (
        <input
            value={text}
            onChange={e => handleInput(e.target.value)}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    handleSubmit();
                }
            }}
        />
    )
}

export default TodoInputField