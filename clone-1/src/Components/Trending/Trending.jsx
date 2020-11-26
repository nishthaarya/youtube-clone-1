import React from "react";
import axios from "axios";
import { TrendingItems } from "./TrendingItems";
import styles from "./Trending.module.css";

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trending_videos: [],
      isLoading: false,
      error: false
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    axios({
      method: "get",
      url: "https://youtube.googleapis.com/youtube/v3/videos",
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 50,
        regionCode: "IN",
        key: "AIzaSyBn6b2JTx6poyQPcJ9KdGlkmrsPxF2xL1U"
      }
    }).then((res) => {
      this.setState({
        isLoading: false,
        trending_videos: res.data.items
      });
      // console.log(res);
    });
  }
  render() {
    const { trending_videos, isLoading, error } = this.state;
    // console.log(trending_videos);
    return (
      <div className={styles.Trending}>
        <div className={styles.trending_header}>
          <span>
            <img
              src="https://youtube.com/img/trending/chips/music_80x80.png"
              alt="music"
            />
            <p>Music</p>
          </span>
          <span>
            <img 
              src="https://youtube.com/img/trending/chips/gaming_80x80.png"
              alt="gaming"
            />
            <p>Gaming</p>
          </span>
          <span>
            <img
              src="https://youtube.com/img/trending/chips/news_80x80.png"
              alt="news"
            />
            <p>News</p>
          </span>
          <span>
            <img
              src="https://youtube.com/img/trending/chips/movies_80x80.png"
              alt="movies"
            />
            <p>Movies</p>
          </span>
          <span>
            <img
              src="https://youtube.com/img/trending/chips/fashion_80x80.png"
              alt="fashion"
            />
            <p>Fashion & Beauty</p>
          </span>
        </div>
        <hr />
        {
          <div>
            {isLoading ? (
              <h5>Loading...</h5>
            ) : !isLoading && error ? (
              <h5>Something went wrong</h5>
            ) : (
              trending_videos && (
                <div className = {styles.trending_vids}>
                  {trending_videos.map((items) => (
                    <TrendingItems key={items.id} {...items} />
                  ))}
                </div>
              )
            )}
          </div>
        }
      </div>
    );
  }
}
export { Trending };
