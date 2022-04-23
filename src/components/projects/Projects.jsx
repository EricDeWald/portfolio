import React from "react";
import "./projects.css";
import rPotato from "../assets/images/rottenPotato_sm.png"
import workDay from "../assets/images/workday_sm.png"
import resturnal from "../assets/images/resternal.png"
import weather from "../assets/images/weather_sm.png"

export default function Projects() {
    return (
        <div className="projects">
            <div className="project-left">
            <section class="Tile">
                <h2>Rotten Potato</h2>
                <a href="https://ahnjaeyung.github.io/Project_1/"><img src={rPotato} alt="green code"></img></a>
                <a href="https://github.com/ahnjaeyung/Project_1.git"><p id="blerb">See Code</p></a>
            </section>
            <section class="Tile">
                <h2>Workday Scheduler</h2>
                <a href="https://ericdewald.github.io/Assignment-5_Work_Day_Scheduler/"><img src={workDay} alt="blue code"></img></a>
                <a href="https://github.com/EricDeWald/Assignment-5_Work_Day_Scheduler.git"><p id="blerb">See Code</p></a>
            </section>
            </div>
            <div className="project-right">
            <section class="Tile">
                <h2>Cuisine Notebook</h2>
                <a href="https://github.com/Mully7773/Restaurant-Journal-Project-II"><img src={resturnal} alt="purple code"></img></a>
                <a href="https://github.com/Mully7773/Restaurant-Journal-Project-II.git"><p id="blerb">See Code</p></a>
            </section>
            <section class="Tile">
                <h2>Weather Forecast</h2>
                <a href="https://ericdewald.github.io/Assignment-6_Weather_Dashboard/"><img src={weather} alt="code rain"></img></a>
                <a href="https://github.com/EricDeWald/Assignment-6_Weather_Dashboard.git"><p id="blerb">See Code</p></a>
            </section>
            </div>
        </div>
        
    )
}