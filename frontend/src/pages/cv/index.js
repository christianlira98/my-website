import React, {Component} from 'react'
import backend from '../../services/backendRequest'
import resume from '../../resume/cv.json'
import './styles.css'


export default class CV extends Component {

    constructor (props) {
        super(props)
        this.state = {
            sideMenu: <props.sideMenu />,
            cvheader: null,
            cvexperience: null,
            cveducation: null,
            cvlanguage: null,
            cvskills: null
        }
    }

    generateSizeGrid = (count) => {
        let string = []
        string.push("150px")
        for(let i = 0; i < count - 1; i++) {
            string.push("auto")
        }
        return string.join(' ')
    }

    getResume = async () => {
        const resume = await backend.get('/resume')
        return resume
    }

    componentDidMount = async () => {
        let count = 0
        // const resume = await this.getResume().data
        for (let [key, value] of Object.entries(resume)){
            count++
            if(key === 'header') {
                this.setState({
                    cvheader: (<this.props.cvheader {...value}/>)
                })
            }else if (key === 'work'){
                this.setState({
                    cvexperience: (<this.props.cvexperience {...value}/>)
                })
            }else if (key === 'education') {
                this.setState({
                    cveducation: (<this.props.cveducation {...value}/>)
                })
            }else if (key === 'language') {
                this.setState({
                    cvlanguage: (<this.props.cvlanguage {...value}/>)
                })
            }else if (key === 'skill') {
                this.setState({
                    cvskills: (<this.props.cvskills {...value}/>)
                })
            }
        }
        let grid = document.querySelector('.cv-grid')

        grid['style']['grid-template-rows'] = this.generateSizeGrid(count)
    }

    render() {
        return (
            <main className="cv-main">
                {this.state.sideMenu}
                <div className='cv-content'>
                    <div className='cv-grid'>
                        {this.state.cvheader}
                        {this.state.cvexperience}
                        {this.state.cveducation}
                        {this.state.cvlanguage}
                        {this.state.cvskills}
                    </div>
                </div>
            </main>
        )
    }



}
