import React, {Component} from 'react'
import './styles.css'


export default class CVHeader extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            address: props.address,
            birthday: props.birthday,
            email: props.email,
            github: props.github,
            name: props.name.split(' '),
            phone: props.phone
        }
    }

    render() {
        return (
            <header className="cv-header">
                <h1>{this.state.name.slice(0, 1)}
                    <mark>{this.state.name.slice(1).join(' ')}</mark>
                </h1>
                <h5> <i>{this.state.address} </i> </h5>
                <div className="contact">
                    <a>
                        <i border-right = "" className="fa fa-mobile" aria-hidden="true"> {`${this.state.phone}`}</i>
                    </a>
                    <a  href={`mailto: ${this.state.email}`} rel="noopener noreferrer" target="_blank">
                        <i border-right = "" className = "fa fa-envelope" aria-hidden="true"> {`${this.state.email}`}</i>
                    </a>
                    <a href={`https://github.com/${this.state.github}`} rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"> {`${this.state.github}`}</i>
                    </a>
                </div>
            </header>

        )
    }


}

