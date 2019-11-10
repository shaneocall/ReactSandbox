import React from "react"


function Joke(props) {

    const questionStyles = { display: !props.question && "none" }
    const answerStyles = { color: !props.question && "#888888" }

    return (
        <div className="joke">
            <h3 style={questionStyles} >Question: {props.question} </h3>
            <h3 style={answerStyles} >Answer: {props.punchLine} </h3>
            <hr />
        </div>
    )


}

export default Joke;

