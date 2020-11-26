import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { VideoItem } from "./VideoItem";
import styles from "./Videos.module.css";
class Videos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, loading, isSearching } = this.context;
    console.log(data);
    console.log(this.props);
    return loading ? (
      <h4>Loading...</h4>
    ) : (
      <>
        <div className={styles.main_content}>
          {data.map((item) => {
            // console.log(item.id, item.id.videoId)
            return !isSearching ? (
              <VideoItem {...this.props} key={item.id} {...item} />
            ) : (
              <VideoItem key={item.id.videoId} {...item} {...this.props} />
            );
          })}
        </div>
      </>
    );
  }
}
Videos.contextType = DataContext;
export { Videos };
