import React from "react";
import "./projects.css";
import rPotato from "../assets/images/rottenPotato_sm.png";
import dollars from "../assets/images/dollars_and_bills_DT.png";
import resturnal from "../assets/images/resternal.png";
import weather from "../assets/images/weather_sm.png";
// import {BrowserRouter as Router, Routes} from "react-router-dom";

export default function Projects() {
    return (
        <div className="projects">
            <div className="project-left">
            <section class="Tile">
                <h2>Rotten Potatos</h2>
                <div className="image-tile-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi cupiditate culpa saepe ratione doloribus dignissimos reiciendis ipsam sit assumenda, accusamus, obcaecati quis maiores dolorem placeat, unde vero mollitia voluptatem fugiat.</div>
                <a href="https://ahnjaeyung.github.io/Project_1/" target="_blank"><img className="image-tile" src={rPotato} alt="green code"></img></a>
                <a href="https://github.com/ahnjaeyung/Project_1.git" target="_blank"><p id="blerb">See Code</p></a>
            </section>
            <section class="Tile">
                <h2>Dollars and Bills</h2>
                <a href="https://dollars-and-bills.herokuapp.com/" target="_blank"><img className="image-tile" src={dollars} alt="blue code"></img></a>
                <a href="https://github.com/EricDeWald/Dollars_and_Bills" target="_blank"><p id="blerb">See Code</p></a>
            </section>
            </div>
            <div className="project-right">
            <section class="Tile">
                <h2>Cuisine Notebook</h2>
                <a href="https://github.com/Mully7773/Restaurant-Journal-Project-II" target="_blank"><img className="image-tile" src={resturnal} alt="purple code"></img></a>
                <a href="https://github.com/Mully7773/Restaurant-Journal-Project-II.git" target="_blank"><p id="blerb">See Code</p></a>
            </section>
            <section class="Tile">
                <h2>Weather Dashboard</h2>
                <a href="https://ericdewald.github.io/Assignment-6_Weather_Dashboard/" target="_blank"><img className="image-tile" src={weather} alt="code rain"></img></a>
                <a href="https://github.com/EricDeWald/Assignment-6_Weather_Dashboard.git" target="_blank"><p id="blerb">See Code</p></a>
            </section>
            </div>
        </div>
        
    )
}