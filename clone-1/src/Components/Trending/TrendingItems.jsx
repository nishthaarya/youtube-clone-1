import React from "react";
import styles from "./Trending.module.css";
import { ClockCircleFilled, MenuUnfoldOutlined } from "@ant-design/icons";
// import { MoreVertIcon } from "@material-ui/icons";

function diffDate(createdDate) {
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

function TrendingItems(item) {
  let views = item.statistics.viewCount;
  views =
    views >= 10 ** 9
      ? `${(views / 10 ** 9).toFixed(2)} B`
      : views >= 10 ** 6
      ? `${(views / 10 ** 6).toFixed(2)} M`
      : views >= 1000
      ? `${(views / 10 ** 3).toFixed(2)} K`
      : views;
  let createdDate = new Date(item.snippet.publishedAt);
  let diff = diffDate(createdDate);

  return (
    <div className={styles.Video_card}>
      <div className={styles.thumbnail}>
        <img className = {styles.photo} src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
        <span>
          <ClockCircleFilled
            style={{
              color: "white",
              marginBottom: "10px",
              background: "black",
              width: 30,
              height: 20,
              paddingTop: 5,
              borderRadius: "3px",
              opacity: .7,
            }}
          />
          <MenuUnfoldOutlined
            style={{
              color: "white",
              background: "black",
              width: 30,
              height: 20,
              paddingTop: 5,
              borderRadius: "3px",
              opacity: .7
            }}
          />
        </span>
      </div>
      <div>
        <div className={styles.VideoInfo}>
          {/* <span> */}
          <h5>{item.snippet.title}</h5>
          {/* <MoreVertIcon /> */}
          {/* </span> */}
          <div className={styles.channel_views_years}>
            <p className={styles.channelname}>{item.snippet.channelTitle}</p>
            <span>.</span>
            <p>{views} views</p>
            <span>.</span>
            <p>{diff}</p>
          </div>
          <p className={styles.description}>{item.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export { TrendingItems };
