import React from 'react'

function Subcategoria(props) {
    return (
        <div className="containe">
            <div className="imagen">
                <div className="box_random"> <img src={props.image} alt='Deporte'/> </div>
                <p className="id">{props.id}°</p>
            </div>
            <div className="name">
                <div className="nombre">
                    {props.title}
                </div>
            </div>
        </div>
    )
}

export default Subcategoria;
