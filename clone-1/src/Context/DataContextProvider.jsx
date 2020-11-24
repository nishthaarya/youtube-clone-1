import React from "react";
import axios from "axios";

const DataContext = React.createContext();


class DataContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    axios({
      method: "get",
      url: "https://youtube.googleapis.com/youtube/v3/videos",
      params: {
        part: "snippet",
        chart: "mostPopular",
        key: "AIzaSyBn6b2JTx6poyQPcJ9KdGlkmrsPxF2xL1U",
        maxResults: 50
      }
    })
      .then((res) => {
        this.setState({
          videos: res.data.items,
          loading: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { videos, loading } = this.state;
    // console.log(videos);

    return (
      <DataContext.Provider value={{ videos, loading }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
export { DataContext, DataContextProvider };
