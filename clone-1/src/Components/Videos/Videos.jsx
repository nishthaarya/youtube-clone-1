import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { VideoItem } from "./VideoItem";
import styles from "./Videos.module.css";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { data, loading, sendVideoId, isSearching } = this.context;
    console.log(this.props);
    return loading ? (
      <h4>Loading...</h4>
    ) : (
      <>
        <div className={styles.main_content}>
          {data.map((item) => {
            // console.log(item.id, item.id.videoId)
            return !isSearching ? (
              <VideoItem
                {...this.props}
                key={item.id}
                {...item}
                videoid={item.id}
              />
            ) : (
              <VideoItem
                key={item.id.videoId}
                {...item}
                {...this.props}
                videoid={item.id.videoId}
              />
            );
          })}
        </div>
      </>
    );
  }
}
Videos.contextType = DataContext;
export { Videos };
