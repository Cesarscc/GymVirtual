import React from 'react'

function Subcategoria(props) {
    return (
        <div className="containe">
            <div className="imagen">
                <div className="box_random"> <img src={props.image} /> </div>
                <p className="id">{props.id}°</p>
            </div>
            <div className="name">
                <div className="nombre">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Subcategoria;
