import React, {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css'



export default class Grid extends Component {

    handleUrlChange = () => {
        const pathname = window.location.pathname
        document.querySelectorAll('.header-nav a').forEach(e => {
            if(e !== undefined && e.getAttribute('href') !== undefined) {
                if(e.getAttribute('href') === pathname) {
                    e.style.color = '#2077be'
                }else {
                    e.style.color = '#000000'
                }
            }
        })
    }

    UNSAFE_componentWillReceiveProps() {
        this.handleUrlChange()
    }


    componentDidMount() {
        this.handleUrlChange()
    }


    render() {
        return (
            <Container fluid>
                {React.cloneElement(this.props.header, { hideSideBar: this.props.hideSideBar})}
                <Row className="main-content">
                    <Col>
                        <main>
                            {this.props.main}
                        </main>
                    </Col>
                </Row>
                <Row className="about-me">
                    <Col>
                        {this.props.about}
                    </Col>
                </Row>
        </Container>
        )
    }

}
