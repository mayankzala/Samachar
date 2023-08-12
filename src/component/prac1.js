import React from "react";

export default function Pract1(props){
    console.log(props.c)
    return (
        <>
        <h1>Hi</h1>
        <button onClick={props.f}>Click me</button>
        </>
    )
}