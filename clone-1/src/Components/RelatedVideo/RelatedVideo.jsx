import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import { RelatedVideoItem } from './RelatedVideoItem'
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import PlaylistAddSharpIcon from "@material-ui/icons/PlaylistAddSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";

class RelatedVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.context.videoId,
      relatedVideos: [],
    };
  }

  componentDidMount() {
    var api_key = "AIzaSyDKJVc3u1Y_Q3hMf9b5WMkSF6mHT-4c69Q";
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
  diffDate = (createdDate) => {
  const date = new Date(createdDate).getTime();
  const y = new Date(createdDate);
  const date1 = new Date();
  let yearsDiff = date1.getFullYear() - y.getFullYear();
  let months = date1.getMonth() - y.getMonth();
  let secDiff = Math.floor((date1 - date) / 1000);
  let minutesDiff = Math.floor(secDiff / 60);
  let hoursDiff = Math.floor(minutesDiff / 60);
  let daysDiff = Math.floor(hoursDiff / 24);
  return yearsDiff > 0
    ? `${yearsDiff} years ago`
    : months > 0
    ? `${months} monthes ago`
    : daysDiff > 0
    ? `${daysDiff} days ago`
    : hoursDiff > 0
    ? `${hoursDiff} hours ago`
    : minutesDiff > 0
    ? `${minutesDiff} minutes ago`
    : `${secDiff} seconds ago`;
}

  render() {
    const { search, relatedVideos } = this.state;
    const { handleSearch, handleToggle } = this.context;
     let createdDate = new Date(relatedVideos[0]?.snippet.publishedAt);
     let diff = this.diffDate(createdDate);
    return (
      <>
        <div>
          <div>
            <img
              src={relatedVideos[0]?.snippet.thumbnails.default.url}
              alt="thumbnail"
            />
          </div>

          <div>
            <div>
              <h5>{relatedVideos[0]?.snippet.title}</h5>
              <p>
                <span> 10k views</span>
                <span>{diff}</span>
              </p>
              <p>{relatedVideos[0]?.snippet.channelTitle}</p>
              <p>{relatedVideos[0]?.snippet.description}</p>
            </div>
          </div>
          <div>
            <ThumbUpIcon />
            <ThumbDownIcon />
            <ScreenShareIcon />
            <PlaylistAddSharpIcon />
            <span>Subscribe</span>
            <NotificationsSharpIcon/>
          </div>
        </div>
        <div>
          <ul>
            {relatedVideos
              ?.filter((el, index) => index < 40 && index > 0)
              .map((el, index) => {
                return <RelatedVideoItem {...el} key={index} />;
              })}
          </ul>
        </div>
      </>
    );
  }
}
RelatedVideo.contextType = DataContext;

export { RelatedVideo };
