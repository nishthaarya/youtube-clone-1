import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import { DebounceInput } from "react-debounce-input";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";
import { DataContext } from "../../Context/DataContextProvider";
import axios from 'axios'
import styled from 'styled-components'
import { List } from "antd";
import "antd/dist/antd.css";

const Icon = styled.div`
  font-size: 15px;
  margin-right: 23px;
`
const Menu = styled.div`
  padding: 10px 20px;
  color: #606060;
  text-align: center;
  line-height: 20px;
     &:hover {
      background-color: #f2f2f2;
     }
`

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchlist: [],
      isAuth: false
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    const { handleSearch } = this.context;

    this.setState({
      search: value,
    });
    handleSearch(this.state.search);
  };

  render() {
    const { search, searchlist, isAuth } = this.state;
    const { handleSearch, handleToggle } = this.context;
    // console.log(data);
    var list = searchlist?.filter((el, index) => index < 15);
    return (
      <>
        <div className="navbarContainer">
          <div className="left">
            <Menu onClick={handleToggle}>
              <MenuIcon />
            </Menu>

            <div>
              <img
                src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg"
                className="homeBtn"
              />
            </div>
          </div>
          <div className="center">
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              onChange={this.handleChange}
            />

            {/* <input
              id="searchBar"
              placeholder="Search"
              value={search}
              onChange={this.handleChange}
            /> */}

            <button id="searchButton">
              <SearchIcon
                style={{ color: "grey", fontSize: "20px" }}
                onClick={() => handleSearch(search)}
              />
            </button>
          </div>

          <div className="right">
            <Icon>
              <VideoCallIcon />
            </Icon>

            <Icon>
              <AppsIcon />
            </Icon>

            <Icon>
              <NotificationsIcon />
            </Icon>

            <Icon>
              <AccountCircleIcon />
            </Icon>
          </div>
        </div>

        {/* <div className="searchlist">
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(el) => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{el.snippet.title}</a>}
                />
              </List.Item>
            )}
          />
        </div> */}
      </>
    );
  }
}
Navbar.contextType = DataContext;

export { Navbar };
