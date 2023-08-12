import News from "./news";
import React from "react";


export default function NewFrame(props) {
    return (
        <>
            <div className="d-flex justify-content-around">
                <button disabled={props.pageNo <= 1 ? true : false} type="button" className="btn btn-success" onClick={props.handlePreviousPage}>&larr; Previous</button>
                <button disabled={props.pageNo >= Math.ceil(props.data.totalResults / 10) ? true : false} type="button" className="btn btn-success" onClick={props.handleNextPage}> Next &rarr;</button>

            </div>
            <div className="row m-0">
                {props.data.articles && props.data.articles.map((e) => (
                    <div className="col d-flex justify-content-center p-0" key={e.url}>
                        <News
                            urlToImage={e.urlToImage}
                            title={e.title}
                            description={e.description == null ? "Description not available. Directly refer to article" : e.description.slice(0, 150)}
                            url={e.url}
                            date={e.publishedAt}
                            author={e.author == null ? '' : e.author}
                            name={e.source.name}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

