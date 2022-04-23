import React from "react";
import "../intro/intro.css";
import portrait from "../assets/images/profile_pic.jpg"
export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-left">
                <h2 className="intro-text">Hi, my name is</h2>
                <h1 className="intro-name">Eric DeWald</h1>
                <h2 className="intro-text">I am a web developer</h2>
            </div>
            <div className="intro-right">
                <div className="face">
                    <img id="myFace" src={portrait} alt="handsome dude"></img>
                </div>
            </div>
            <div className="curtin">
            </div>
        </div>
    )
}