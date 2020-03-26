import React, {Component} from 'react'
import './styles.css'


export default class CVSkills extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skill_names: null,
            skill_types: null
        }
    }

    createSkills = () => {
        let skill_name_aux = []
        let skill_type_aux = []
        for (let [key, value] of Object.entries(this.props)) {
            let element_skill_name = (
                <h4 key={`${key}`} >{value.skill_name}</h4>
            )
            let element_skill_value = (
                <h5 key={`${key}`} >{`${value.skill_type}`}</h5> 
            )
            skill_name_aux.push(element_skill_name)
            skill_type_aux.push(element_skill_value)
        }
        this.setState ({
            skill_names: skill_name_aux,
            skill_types: skill_type_aux

        })
    }
    
    componentDidMount() {
        this.createSkills()
    }


    render() {
        return (
            <div className = "skills" >
                <h2>
                    <span>
                        <mark>Lan</mark>guages
                    </span>
                </h2>
                <ul className="skills-entries">
                    <li>
                        <span className="skills-content"> 
                            <span className="skills-names">
                                {this.state.skill_types}
                            </span>
                            <span className="skills-types">
                                {this.state.skill_names}
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}