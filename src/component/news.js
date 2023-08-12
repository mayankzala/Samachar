import React, { useState } from "react"
export default function News(props) {
    return (
        
        <>
            <div className="card m-3 shadow p-3  mb-5 bg-white rounded" style={{ width: "25rem" }}>
                <div>
            <span className="badge bg-secondary mt-2 text-white font-weight-normal" style={{ float:'right', marginBottom :'.2rem!important',fontSize:'1.2vw'}}>{props.name}</span>
                </div>
                <img className="card-img-top" src={props.urlToImage} alt="Card  cap" />
                <div className="card-body">
                    <i style={{ marginTop: '20px' }}>Publiced on : {props.date.split('T')[0]} </i>
                    <br />
                    <i style={{ marginTop: '20px' }}>Author By: {props.author} </i>
                    <hr />
                    <h5 className="card-title">{props.title}...</h5>
                    <i className="card-text">{props.description}...</i><br />
                    <a href={props.url} rel="noreferrer" target="_blank" className="btn btn-primary">Read Full Article</a>
                    
                    <br />
                </div>
            </div>
        </>
    )
}