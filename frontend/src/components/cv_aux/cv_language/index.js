import React, {Component} from 'react'
import './styles.css'


export default class CVLanguage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            language_value: null,
            language_level: null
        }
    }
    
    createLanguage = () => {
        let language_value_aux = []
        let language_level_aux = []
        for (let [key, value] of Object.entries(this.props)) {
            let element_language = (
                <h4 key={`${key}`} >{value.language}</h4>
            )
            let element_value = (
                <h5 key={`${key}`}>{`${value.level}`}</h5> 
            )
            language_value_aux.push(element_language)
            language_level_aux.push(element_value)
        }
        this.setState ({
            language_value: language_value_aux,
            language_level: language_level_aux
        })
        

    }

    componentDidMount() {
        this.createLanguage()
    }

    render() {
        return (
            <div className = "language" >
                <h2>
                    <span>
                        <mark>Lan</mark>guages
                    </span>
                </h2>
                <ul className="language-entries">
                    <li>
                        <span className="language-content"> 
                            <span className="language-value">
                                {this.state.language_value}
                            </span>
                            <span className="language-level">
                                {this.state.language_level}
                            </span>
                        </span>

                    </li>
                </ul>

            </div>
        )
    }
}