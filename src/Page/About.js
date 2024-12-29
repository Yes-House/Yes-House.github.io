import React from "react";
import './css/About.css'
import {Row} from "react-bootstrap";

function About() {
    return(
        <div id="about">
            <div className="text"> Order Page </div>
            <Row className="Row">

            <div className="text_small_about">
                주문 페이지는 준비중에 있습니다.
            </div>
            <div className="text_small_about">
            주문을 원하시면 아래 연락처 정보를 사용하여 언제든지 문의해 주세요.
            </div>
            </Row>
            <Row className="Row">
            <div className="text_small_about">
            If you would like to place an order,
            </div>
            <div className="text_small_about">
            please contact us anytime using the contact information below.
            </div>
            </Row>

        </div>

        // 주문 페이지는 준비 중입니다. 주문을 원하시면 아래 연락처 정보를 사용하여 언제든지 문의해 주세요.
        // 주문 페이지는 준비중에 있습니다.

        // 주문을 원하시면 아래 연락처 정보를 사용하여 언제든지 문의해 주세요.
        // The order page is under construction.

// If you would like to place an order, please contact us anytime using the contact information below.
        // We are preparing the order page. If you would like to place an order, please contact us anytime using the contact information below.


    )
}

export default About;