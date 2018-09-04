import React from "react";
import { Icon, Input, AutoComplete } from 'antd';
import nba from 'nba';
/*window.nba = nba;*/
const Option = AutoComplete.Option;
export class SearchBar extends React.Component{

        state = {
            dataSource: [],
        }

        handleSearch = (value) => {
            this.setState({
                dataSource: !value ? [] : nba.searchPlayers(value).map(
                    ({fullName, playerId})=>(
                        <Option key={playerId} value={fullName}>{fullName}
                        </Option>
                    )
                ),
            });
        }
        onSelect =(value) =>{
            console.log('onSelect', value);
            this.props.loadPlayerInfo(value);
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
                    optionLabelProp="value"
                >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>
            );
        }

}