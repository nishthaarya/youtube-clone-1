import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import { RelatedVideoItem } from "./RelatedVideoItem";

class RelatedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: "",
      relatedVideos: [],
    };
  }
  apiCall() {
    var api_key = "AIzaSyB54tyieozL3BLkpxHssdGOcdI3RCzVs_Q";
    axios({
      method: "get",
      url: "https://youtube.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        key: api_key,
        maxResults: 20,
        type: "video",
        relatedToVideoId: this.state.videoId,
      },
    })
      .then((response) => {
        console.log(response.data.items);
        return this.setState({
          relatedVideos: response.data.items,
        });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (e) => {
    e.persist();
    const { value } = e.target;
    this.setState({
      search: value,
    });
  };
  render() {
    const { search, relatedVideos, apiCall } = this.state;
    const { handleSearch, handleToggle } = this.context;
    return (
      <>
        <div>
          <div>
            {}
          </div>
          {
          }
          <ul>
            {relatedVideos
              ?.filter((el, index) => index < 40)
              .map((el, index) => {
              return <RelatedVideoItem {...el} key={index}/>;
              })}
          </ul>
        </div>
      </>
    );
  }
}
RelatedVideo.contextType = DataContext;
export { RelatedVideo };