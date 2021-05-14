import React from "react"

const Card = (props) => (
    <div
        style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            border: '5px solid #000',
            padding: '10px',
            margin: '15px',
            boxShadow: '-5px 5px 0px #808080'
        }}
    >
        {props.children}
    </div>
)

export default Card