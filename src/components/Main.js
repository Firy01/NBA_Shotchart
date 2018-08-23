import React from "react";
import nba from 'nba';
import {Profile} from "./Profile";
import {ShotChart} from "./ShotChart";

//window.nba = nba; expose to the windows scope
export class Main extends React.Component{
    componentDidMount(){
        console.log(nba.findPlayer("Stephen curry"));
    }
    render(){
        return(
            <div className="main">
                <Profile/>
                <ShotChart playerId="201939"/>
            </div>
        );
    }
}