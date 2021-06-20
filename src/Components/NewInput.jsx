import React from 'react';
// import { Span } from './Styles'
import {IoIosCall} from 'react-icons/io';
// import {  GiPadlock } from 'react-icons/gi';

export default function NewInput({ span, text, className, label, pre, classNam, type, StartIcon, EndIcon, value, size, placeholder, width, style, radius, padding  }) {
    return (
        <div width="50%" >
            <span className="span" >{span}</span>
            <div><label htmlFor="" className="label">{label}</label></div>
            <div className="search" style={{position: 'relative', display: 'inline-block', width: "100%"}}>
            <span className="fa fa-search"></span>
            <IoIosCall style={{position: 'absolute', left: "10px", top: "28px", zIndex: 10, }} className="fa fa-search"/>
            <input style={style} width={width} type={type} size={size} radius={radius} padding={padding} className={className} value={value} StartIcon={StartIcon} EndIcon={EndIcon} placeholder={placeholder}/>
            <pre>{pre}</pre>
            </div> 
        </div>
    )
}
