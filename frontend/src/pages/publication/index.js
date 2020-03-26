import React, {Component} from 'react'
import './styles.css'
export default class Publication extends Component {

    constructor (props) {
        super(props)
        this.state = {
            sideMenu: <props.sideMenu />
        }
    }
    render() {


        return (
            <div className="publication-main-div">
                {this.state.sideMenu}
                <aside className="publication-content">
                    <h3>
                        <span>
                            <mark>Publi</mark>cations
                        </span>
                    </h3>
                    <ul>
                        <li>
                            <h4>
                                <strong>Redes Neurais Artificiais para Predição de Tolerância a Falhas em Redes Ópticas</strong>
                            </h4>
                            <p>Publicado em <i>Anais do XVI Encontro Nacional de Inteligência Artificial e Computacional,</i> 2020</p>
                            <p>
                                Lira, C., Barros, J., Araújo, P., & Araújo, D. Redes Neurais Artificiais para Predição de Tolerância a Falhas em Redes Ópticas. <br />
                                DOI: <a href='https://doi.org/10.5753/eniac.2019.9299'>https://doi.org/10.5753/eniac.2019.9299</a>.
                            </p>
                        </li>
                        <hr />
                    </ul>
                </aside>
            </div>
        )
    }
}