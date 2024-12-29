import React from "react";
import './css/Contact.css'
// import { Col, Row} from "react-bootstrap";
import {Row} from "react-bootstrap";
// import styled from "styled-components";


// const Img = styled.img`
// height:4em;
// @media (max-width: 580px) {
//     height:3em;
// }
// `

function Contact() {
    return(
        <div id="contact">
           <div className="text"> Contact </div>
            <Row className="Row">
                {/* <Col><Img src="img/html.png"/></Col> */}
                <div className="text_small">
                    Tel.
                    </div>
                <div className="text_small_1">
                    +82)10-8267-6879
                    </div>
                <div className="text_small">
                    E-mail.
                    </div>
                <div className="text_small_1">
                    yes.house114@gmail.com
                    </div>
               
                <div className="text_small_h">
                    Homepage.
                    </div>
                <div className="text_small_1_h">
                    yes-house.github.io
                    </div>
            
                {/* <Col><Img src="img/YESHOUSE_logo.png"/></Col> */}
                {/* <Col><Img src="img/js.png"/></Col> */}
            </Row>
            <span className="line"/>
            <Row className="Row">

                <div className="text_small_2">
                    YE’S HOUSE COMPANY
                    </div>
                <div className="text_small_2">
                    Dosan-daero 49-gil, Gangnam-gu, Seoul, Republic of Korea
                     </div>
            {/* <Col><Img src="img/react.png"/></Col> */}
                {/* <Col><Img src="img/nodejs.png"/></Col>
                <Col><Img src="img/express.png"/></Col> */}
            </Row>
            <span className="line"/>

            {/* <Col><Img src="img/Letter_rmbg.png"/></Col> */}
            {/* <Col><Img src="img/YESHOUSE_logo.png"/></Col> */}
            {/* <Col><Img src="img/mongodb.png"/></Col>
                <Col><Img src="img/mysql.png"/></Col> */}
        </div>



        // <div id="contact" className="ContactTop">
        //     Contact
        // </div>
    )
}



export default Contact;