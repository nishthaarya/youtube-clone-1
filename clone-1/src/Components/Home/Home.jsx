import React from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../Context/DataContextProvider'
import Categories from '../Categories/Categories'
import { Navbar } from '../Navbar/Navbar'
import { RelatedVideo } from '../RelatedVideo/RelatedVideo'
import { RelatedVideoItem } from '../RelatedVideo/RelatedVideoItem'
import Sidebar from '../Sidebar/Sidebar'
import { Trending } from '../Trending/Trending'
import { Videos } from '../Videos/Videos'
import styles from './Home.module.css'



export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {trending} = this.context
        
        return !trending ? (
            <div className = {styles.home}>
                <div className = {styles.bottom}>
                    <div className = {styles.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className = {styles.right}>
                        <div className = {styles.category}>
                            <Categories/>
                        </div>
                        <div className = {styles.vids}>
                            <Videos {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className = {styles.trending_sidebar}>
                <Sidebar />
                <Trending {...this.props} />
            </div>
        )
    }
}
Home.contextType = DataContext
export {Home}
