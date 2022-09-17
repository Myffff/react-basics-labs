import React from "react";

const Task = (props) => {
    return(
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due:{props.deadline}</p>
            <div className="description"><p>{props.description}</p></div>
        </div>
    )
}

// function Task(){
//     return (
//         <p>This is a Task!</p>
//     )
// }

export default Task;
