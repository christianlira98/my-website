import React, { Component } from 'react'

import './styles.css'



export default class SideBar extends Component {

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
                        <a href={process.env.PUBLIC_URL+ "/"} className="link">Home</a>
                        <a href= {process.env.PUBLIC_URL+ "/publications"} className="link">Publications</a>
                        <a href= {process.env.PUBLIC_URL+ "/cv"} className="link">CV</a>
                    </div>
                </nav>
            </span>
        )
    }

}