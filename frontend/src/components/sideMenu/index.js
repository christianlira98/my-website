import React, {Component} from 'react'
import image from '../../images/self.jpg'
import './styles.css'



export default class SideMenu extends Component {

    render() {

        return (
            <aside className="publication-sidemenu">
                <div className="publication-photo">
                    <img src={image} alt="christian lira"/>
                </div>
                <div className="my-content">
                    <h1>Christian Lira</h1>
                    <p>
                        Computer Science Student at UFRPE - Brazil
                    </p>
                    <div className="location">
                        <i className="fa fa-fw fa-map-marker" aria-hidden="true"> Recife, Brazil</i>
                    </div>
                </div>
                <div className="social-medias">
                    <a href="https://www.facebook.com/christian.lira.798" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true"> Facebook</i>
                    </a>
                    <a href="mailto: christianlira98@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-envelope-o" aria-hidden="true"> E-mail</i>
                    </a>
                    <a href="https://github.com/christianlira98" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"> Github</i>
                    </a>
                    <a href="https://www.linkedin.com/in/christianlira98" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true"> Linkedin</i>
                    </a>
                </div>
            </aside>
        )
    }




}