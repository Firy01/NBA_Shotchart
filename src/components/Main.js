import React from "react";
import nba from 'nba';
import {Profile} from "./Profile";
import { DEFAULT_PLAYER_INFO } from "../constants";

import {DataViewContainer} from "./DataViewContainer";
import {SearchBar} from "./SearchBar";


//window.nba = nba; expose to the windows scope
export class Main extends React.Component{
    state ={

        playerInfo: DEFAULT_PLAYER_INFO
        /*{
            playerId: nba.findPlayer(DEFAULT_PLAYER_INFO.playerName).playerId,
        }*/
    }
    componentDidMount(){
        this.loadPlayerInfo(this.state.playerInfo.playerName)
    }
    loadPlayerInfo = (playerName) =>{

        const playerId = nba.findPlayer(playerName).playerId;
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

                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                        <Profile playerInfo={this.state.playerInfo}/>
                        <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}