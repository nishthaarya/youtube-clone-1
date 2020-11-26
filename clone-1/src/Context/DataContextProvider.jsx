import React from 'react'
import axios from 'axios'
const DataContext = React.createContext();
export default class DataContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isToggle: false,
            loading: false,
            videoId: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.sendVideoId = this.sendVideoId.bind(this);
        this.handleTrending = this.handleTrending.bind(this)
    }

    handleTrending() {
      const {trending} = this.state
      if (trending === false) {
        this.setState({
          trending: true
        })
      }
      else {
        this.setState({
          trending: false
        })
      }
    }
    componentDidMount() {
        this.setState({
          loading: true
        });

        axios({
          method: "get",
          url: "https://youtube.googleapis.com/youtube/v3/videos",
          params: {
            part: "snippet, statistics, contentDetails",
            chart: "mostPopular",
            key: "AIzaSyDHSYjrsFEIV2v9_Y6h9MsrVmrrIZVXCHk",
            maxResults: 50,
          },
        })
          .then((res) => {
            this.setState({
              data: res.data.items,
              loading: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }

    handleSearch(search){
    var api_key = "AIzaSyDHSYjrsFEIV2v9_Y6h9MsrVmrrIZVXCHk";
        axios({
          method: "get",
          url: "https://youtube.googleapis.com/youtube/v3/search",
          params: {
            part: "snippet",
            key: api_key,
            maxResults: 50,
            q: search,
          },
        })
          .then((response) => {
            console.log(response.data.items);
            return this.setState({
              data: response.data.items,
              isSearching: true,
            });
          })
          .catch((err) => console.log(err));
    }
    handleToggle(){
        const {isToggle} = this.state
        if (isToggle === false) {
          this.setState({
            isToggle: true
          })
        }
        else {
          this.setState({
            isToggle: false
          })
        }
    }
    sendVideoId(id){
      this.setState({
        videoId: id
      })
      console.log(id)
    }
  
    componentDidUpdate(){
        console.log(this.state.isToggle)
    }
    render() {
        const { 
            handleSearch,
            handleToggle,
            sendVideoId,
            handleTrending
         } = this;
        const {
            data, loading, isToggle, videoId, isSearching, trending
         } = this.state;
        const value =
         {
            handleSearch,
            handleToggle,
            data,
            isToggle,
            sendVideoId,
            videoId,
            isSearching,
            trending,
            handleTrending
        };
        return (
           <DataContext.Provider value={value}>
               {this.props.children}
           </DataContext.Provider>
        )
    }
}
export {DataContext, DataContextProvider}

