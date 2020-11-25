import React from 'react'
import Categories from '../Categories/Categories'
import { Navbar } from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Videos } from '../Videos/Videos'
import styles from './Home.module.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className = {styles.home}>
                <div className = {styles.nav}>
                    <Navbar/>
                </div>
                <div className = {styles.bottom}>
                    <div className = {styles.sidebar}>
                        <Sidebar/>
                    </div>
                    <div className = {styles.right}>
                        <div className = {styles.category}>
                            <Categories/>
                        </div>
                        <div className = {styles.vids}>
                            <Videos/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
