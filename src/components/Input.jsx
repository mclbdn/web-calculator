import React from 'react'

export const Input = (props) => {
    return (
        <div>
            <input type={props.type} value={props.value} onChange={(event) => props.onChange(event.target.value)} id={props.id}  />
        </div>
    )
}