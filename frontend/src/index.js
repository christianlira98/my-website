import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import Grid from './pages/grid_page'
import Header from './components/header'
import SideBar from './components/sideBar'
import Home from './pages/home'
import About from './pages/about'
import Publication from './pages/publication'
import CV from './pages/cv'
import SideMenu from './components/sideMenu'
import CVHeader from './components/cv_aux/cv_header'
import CVExperience from './components/cv_aux/cv_experience'
import CVEducation from './components/cv_aux/cv_education'
import CVLanguage from './components/cv_aux/cv_language'
import CVSkills from './components/cv_aux/cv_skills'


class Renderer {

    constructor(props) {
        this.state = {
            header: props.header,
            home: props.home,
            about: props.about,
            publication: props.publication,
            cv: props.cv
        }
    }

    _render = () => {
        ReactDOM.render(
            <HashRouter basename='/'>
                <Switch>
                    <Route
                        path = '/'
                        exact = {true}
                        render = {(props) => <Grid {...props} 
                            header = {this.state.header} 
                            main = {this.state.home} 
                            about = {this.state.about} />
                        }
                    />
                    <Route 
                        path = '/publications'
                        exact = {true}
                        render = {(props) => <Grid {...props}
                            header = {this.state.header} 
                            main = {this.state.publication} />
                        }
                    />
                    <Route 
                        path = '/cv'
                        exact = {true}
                        render = {(props) => <Grid {...props}
                            header = {this.state.header} 
                            main = {this.state.cv} />
                        }
                    />
                </Switch>
            </HashRouter>
                    , document.getElementById('root')
        );
      }

    
}

serviceWorker.unregister()

const passingProps = {
    header: <Header sideMenu = {SideBar}/>,
    home: <Home />,
    about: <About />,
    publication: <Publication sideMenu = {SideMenu }/>,
    cv: <CV  sideMenu = {SideMenu } 
            cvheader = {CVHeader} 
            cvexperience = {CVExperience}
            cveducation = {CVEducation}
            cvlanguage = {CVLanguage} 
            cvskills = {CVSkills} />

}


const render = new Renderer(passingProps)


render._render() //Renderizando.

