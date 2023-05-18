
import React, { useEffect, useState } from "react";



export const MyButton = (props) => {
    return (
        <div>
            <button
            className = {props.className}
                onClick={props.onClick}
                disabled={props.disabled}>
                {props.title}
            </button>
        </div>
    )
}

