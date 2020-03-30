import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {Row, Col } from 'react-bootstrap';


import './styles.css'

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hideSideBar: props.hideSideBar,
            sideMenu: null
        }

    }
     
    handleOnClick = () => {
        if(this.state.sideMenu == null) {
            this.setState({
                sideMenu: <this.props.sideMenu />
            });
        }else {
            this.setState({
                sideMenu: null
            });
        }
    }

    UNSAFE_componentWillReceiveProps() {
        if(this.state.hideSideBar) {
            this.setState({
                sideMenu: null
            });           
        }
    }

    render () {
            return (
                <Row className="main-header">
                    <Col sm={12} md={6}>
                        <div className="pseudo-logo">
                            <Link to="/">Christian Lira.</Link>
                            <button onClick={this.handleOnClick} className="menu-toggle">
                                <i className="fa fa-lg fa-bars"></i>
                            </button>
                        </div>
                        <aside className="aside-menu">
                            {this.state.sideMenu}
                        </aside>
                    </Col>
                    <Col md={6} >
                        <nav className="header-nav">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/publications">Publications</Link>
                                </li>
                                <li>
                                    <Link to="/cv">CV</Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            )
    }

}
