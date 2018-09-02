import React from "react";
import { Icon, Input, AutoComplete } from 'antd';
import nba from 'nba';
/*window.nba = nba;*/

export class SearchBar extends React.Component{

        state = {
            dataSource: [],
        }

        handleSearch = (value) => {
            this.setState({
                dataSource: !value ? [] : nba.searchPlayers(value).map(
                    ({fullName})=>fullName
                ),
            });
        }
        onSelect =(value) =>{
            console.log('onSelect', value);
        }

        render() {
            const { dataSource } = this.state;
            return (
                <AutoComplete
                    dataSource={dataSource}
                    className= "search-bar"
                    style={{ width: "100%" }}
                    size="large"
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
            );
        }

}