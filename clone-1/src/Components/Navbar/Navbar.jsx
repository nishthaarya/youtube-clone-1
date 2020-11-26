import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";
import { DataContext } from "../../Context/DataContextProvider";
import axios from 'axios'
import styled from 'styled-components'

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

  // debouncerer = (delay, callback) => {
  //   var debounce;
  //   return function () {
  //     var value = this.state.search;
  //     debounce && clearTimeout(debounce);
  //     debounce = setTimeout(function () {
  //       callback(value);
  //     }, delay);
  //   };
  // };
  componentDidMount(){
    console.log(this.state.search);
  }

  debouncer(){
    var api_key = "AIzaSyDnOErpl_HkR8b2BYSWlA4u6Ghtyr4ytSs";
        axios({
          method: "get",
          url:
            "https://youtube.googleapis.com/youtube/v3/search",
          params: {
            part: "snippet",
            key: api_key,
            maxResults: 15,
            q : this.state.search
          },
        })
          .then((response) => {
              console.log(response.data.items);
              return (
                  this.setState({
                      searchlist: response.data.items
                  })
              )
          })
          .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    e.persist()
    const { value } = e.target;
    this.setState({
      search: value,
    });
    
  };

  render() {
    const { search, searchlist, isAuth } = this.state;
    const { handleSearch, handleToggle } = this.context;
    // console.log(data);
    return (
      <>
        <div className="navbarContainer">
          <div className="left">
            <Menu onClick={handleToggle}>
              <MenuIcon/>
            </Menu>

            <div>
              <img src = "https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg" className = "homeBtn"/>
            </div>
          </div>
          <div className="center">
            <input
              id="searchBar"
              placeholder="Search"
              value={search}
              onChange={this.handleChange}
            />

            <button id="searchButton">
              <SearchIcon
                style={{ color: "grey", fontSize: "20px" }}
                onClick={() => handleSearch(search)}
              />
            </button>
          </div>

          <div className="right">
            <Icon>
              <VideoCallIcon/>
            </Icon>

            <Icon>
              <AppsIcon />
            </Icon>

            <Icon>
              <NotificationsIcon />
            </Icon>

            <Icon>
              <AccountCircleIcon/>
            </Icon>
          </div>
        </div>

        <div className="searchlist">
          <ul>
            {searchlist
              ?.filter((el, index) => index < 15)
              .map((el, ind) => {
                return <li key={ind}>{el.snippet.title}</li>;
              })}
          </ul>
        </div>
      </>
    );
  }
}
Navbar.contextType = DataContext;

export { Navbar };
