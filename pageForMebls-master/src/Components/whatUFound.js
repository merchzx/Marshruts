import React from "react";
import { Link } from 'react-router-dom';
import '../Components/whatUFoundd.css'

export function FindWhatUFound() {
    return (
        <div className="wrapper">
            <h1>знайди те, що шукаеш!</h1>
            <div className="collection">
                <img src="forCollection.png"></img>
                <div className="forText">
                    <p>наша нова коллекція</p>
                    <Link to="/NewCollection">
                        <img src="Default.png"></img>
                    </Link>
                </div>
            </div>
            <div className="proposition">
                <img src="forProposition.png"></img>
                <div className="forText">
                    <p>наша нова коллекція</p>
                    <Link to="/Propositions">
                        <img src="Default.png"></img>
                    </Link>
                </div>
            </div>
            <div className="orangeCouch">
                <img src="Orangecouch.png"></img>
                <div className="forLink">
                    <Link to="/Couchs">
                        <img className="go" src="Default.png"></img>
                    </Link>
                </div>
            </div>

        </div>
    )
}