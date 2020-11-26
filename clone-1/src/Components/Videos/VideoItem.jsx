import React from "react";
import styles from "./Videos.module.css";
import {
  UserOutlined,
  ClockCircleFilled,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { DataContext } from "../../Context/DataContextProvider";
import { Redirect } from "react-router-dom";
class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.diffDate = this.diffDate.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }
  diffDate(createdDate) {
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
  selectVideo(id) {
    const { sendVideoId } = this.context;
    const { history } = this.props;
    console.log(this.props);
    history.push(`/videos/${id}`);
    sendVideoId(id);
  }
  render() {
    // console.log(this.props);
    let createdDate = new Date(this.props.snippet.publishedAt);
    let diff = this.diffDate(createdDate);
    return (
      <div
        className={styles.Video_card}
        onClick={() => this.selectVideo(this.props.id.videoId)}
      >
        <div className={styles.thumbnail}>
          <img
            style={{ width: "275px", height: "153px" }}
            src={this.props.snippet.thumbnails.default.url}
            alt="thumbnail"
          />
          <span>
            <ClockCircleFilled
              style={{
                color: "white",
                marginBottom: "10px",
                background: "black",
                width: 35,
                height: 30,
                paddingTop: 8,
              }}
            />
            <MenuUnfoldOutlined
              style={{
                color: "white",
                background: "black",
                width: 35,
                height: 28,
                paddingTop: 8,
              }}
            />
          </span>
        </div>
        <div>
          <UserOutlined
            style={{
              margin: "5px 15px 0 0",
              border: "1px solid black",
              borderRadius: "50%",
              height: "25px",
              width: "30px",
              paddingTop: 5,
            }}
          />
          <div className={styles.VideoInfo}>
            <h5>{this.props.snippet.title}</h5>
            <p className={styles.channelname}>
              {this.props.snippet.channelTitle}
            </p>
            <p className={styles.viewsandtime}>
              <span> 20k views • {diff}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
VideoItem.contextType = DataContext;
export { VideoItem };
