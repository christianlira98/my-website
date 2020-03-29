import React, {Component} from 'react'
import handleDate from '../../global_method'
import './styles.css'


export default class CVEducation extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            education: null
        }

    }

    createEducation = () => {
        let education_aux = []
        for (let [key, value] of Object.entries(this.props)) {
            let date = handleDate(value)
            let element = (
                <li key={`${key}`}>
                    <span className="institution">
                    <h4>{value.institution.name}</h4>
                    <i> <h5>{`${value.location.city}, ${value.location.country}`}</h5> </i>
                </span>
                <span className="course">
                    <h4>{value.course}</h4>
                    <h5>
                        <i>{`${date.startDate} - ${date.endDate}` }</i>
                    </h5>
                </span>
            </li>

            )
            education_aux.push(element)
        }
        this.setState ({
            education: education_aux
        })
    }



    componentDidMount() {
        this.createEducation()
    }

    render () {
        
        return (
            <div className = "education" >
                <h2>
                    <span>
                        <mark>Edu</mark>cation
                    </span>
                </h2>
                <ul className="education-entries entries">
                    {this.state.education}
                </ul>

            </div>
        )

    }

}