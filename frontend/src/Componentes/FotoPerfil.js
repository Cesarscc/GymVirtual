import React from 'react'
//import imagenPerfil from './fp.jpg';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import { CameraFilled } from '@ant-design/icons';

const fotoPerfil = (props) => {
    return (
        
        <div className="fotoPerfil">
            < Avatar size={150} src={props.foto}/>
            <a href="https://www.google.com/">< CameraFilled style={{fontSize: '40px'}} className="iconcamera" /></a>
            
        </div>
    )
}
export default fotoPerfil;