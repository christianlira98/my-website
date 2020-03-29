import React, {Component} from 'react'
import handleDate from '../../global_method'
import './styles.css'


export default class CVExperience extends Component {

    constructor(props) {
        super(props)

        this.state = {
            works: []
        }
    }

    createWorks = () => {
        let works_aux = []
        for(let [key, value] of Object.entries(this.props)) {
            let date = handleDate(value)
            let element = (
                <li key={`${key}`}>
                    <span className="institution">
                        <h4>{value.institution.name}</h4>
                        <i> <h5>{`${value.location.city}, ${value.location.country}`}</h5> </i>
                    </span>
                    <span className="role">
                        <h4>{value.role}</h4>
                        <h5>
                            <i>{`${date.startDate} - ${date.endDate}` }</i>
                        </h5>
                    </span>
                    <span className="description">
                        <p>
                            {value.description}
                        </p>
                    </span>
                </li>
            )
            works_aux.push(element)
        }
        this.setState({
            works: works_aux
        })
    }
    
    componentDidMount() {
        this.createWorks()
    }

    render () {
        
        return (
            <div className = "experience" >

                <h2>
                    <span>
                        <mark>Exp</mark>erience
                    </span>
                </h2>
                <ul className="experience-entries entries">
                    {this.state.works}
                </ul>

            </div>
        )

    }
}