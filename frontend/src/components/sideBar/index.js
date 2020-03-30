import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './styles.css'



export default class SideBar extends Component {

    constructor(props) {
        super(props)
    }

    handleUrlChange = () => {
        const pathname = window.location.pathname
        
        document.querySelectorAll('.main-nav a').forEach(e => {
            if(e !== undefined && e.getAttribute('href') !== undefined) {
                if(e.getAttribute('href') === pathname) {
                    e.style.color = '#2077be'
                }
            }
        })
    }
    
    componentDidMount() {
        // 2077be
        this.handleUrlChange()
    }

    render () {
        return (
            <span>
                <nav className="main-nav">
                    <div >
                        <Link to = "/" className="link">Home</Link>
                        <Link to="/publications" className="link">Publications</Link>
                        <Link to = "/cv" className="link">CV</Link>
                    </div>
                </nav>
            </span>
        )
    }

}