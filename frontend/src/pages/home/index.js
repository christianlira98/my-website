import React, {Component} from 'react'

import './styles.css'

export default class Home extends Component {


    constructor (props) {
        super(props)

        this.state = {
        }

    }

    render() {
        return (
            <main className="home-main">
            <article className="article">
                <section className="animation">
                    <section className="sec-hello">
                        <p id="hello">
                            Hello World! My name is
                        </p>
                    </section>
                    <section className="sec-nome">
                        <p id="nome">
                            <mark>Christian Lira</mark>
                        </p>
                    </section>
                    <section className="sec-descricao">
                        <p id="descricao">
                            I am a <mark>Software Developer</mark>
                        </p>
                    </section>
                    <div className="social-medias">
                        <a href="https://www.facebook.com/christian.lira.798" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="mailto: christianlira98@gmail.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/christianlira98" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/christianlira98" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <span id="button-radius">
                        <a href="https://www.github.com/christianlira98" rel="noopener noreferrer" target="_blank">My github</a>
                    </span>
                </section>
            </article>
        </main>
        )
    }

}

