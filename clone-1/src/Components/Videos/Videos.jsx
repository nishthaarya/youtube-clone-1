import React from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { VideoItem } from "./VideoItem";
import styles from './Videos.module.css'

class Videos extends React.Component {
  render() {
    const { data, loading } = this.context;
    // console.log(videos);
    return loading ? <h4>Loading...</h4> :(
      <>
        <div className={styles.main_content}>
          {data.map((item) => {
            return (
              <VideoItem key={item.id} {...item} />
            );
          })}
        </div>
      </>
    );
  }
}

Videos.contextType = DataContext;
export { Videos };
