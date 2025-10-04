import "./Container.css"
function Container({score}) {
    
    return ( <div className="Scoreboard">
        <h1 className="score"> {score} </h1>
    </div> );
}

export default Container ;