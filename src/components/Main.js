import React from "react";
import nba from 'nba';
import {Profile} from "./Profile";


import {DataViewContainer} from "./DataViewContainer";

//window.nba = nba; expose to the windows scope
export class Main extends React.Component{
    state ={
        playerId: nba.findPlayer("Stephen curry").playerId,
        playerInfo: {}
    }
    componentDidMount(){
       const playerId = nba.findPlayer("Stephen curry").playerId;
       nba.stats.playerInfo({PlayerID: playerId}).then(
           (response)=>{
              const playerInfo = Object.assign(
                  {}, response.commonPlayerInfo[0], response.playerHeadlineStats[0]);
              //const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
              this.setState({playerInfo});
           },
           ()=>{

           }
       );
    }

    render(){
        console.log(this.state.playerInfo);
        return(
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerId}/>
            </div>
        );
    }
}