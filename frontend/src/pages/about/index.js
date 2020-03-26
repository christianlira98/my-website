import React, {Component} from 'react'
import './styles.css'

export default class About extends Component {


    render() {
        return (

            <article className="about-article">
                <img src="https://images.vexels.com/media/users/3/138177/isolated/preview/2bdc342341743e8e460582eb7891c2bb---cone-de-transporte-pessoa-by-vexels.png" 
                alt="me" />

                <aside className="about-content">
                    <h2>About Me</h2>
                    <p>
                        My name is Christian Lira, I am in my college fourth year taking a computer science course at UFRPE - Brazil.
                        During this time in the IT world I managed to discover the wonderful feeling of being a developer.
                        Because of this, i've decided to create this web site, a portal where people can get to know me a little
                        better.
                    </p> 
                </aside>
            </article>

        )
    }


}