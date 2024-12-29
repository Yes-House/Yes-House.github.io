import React, { useState } from "react";
import "./css/Home.css";
import { TypingMultiline } from "react-kr-typing-anim";
import Button from "react-bootstrap/Button";

function Home() {
  const [show, setShow] = useState(false);

  const str1 = "안녕하세요, 건강한 음식과 행복을 나누는";
  const str2 = `Ye's house`;
  const str3 = ` 입니다.`;

  return (
    <div id="home" className="HomeTop">
      <div className="bubble b1"/>
      <div className="bubble b2"/>
      <div className="bubble b3"/>
      <div className="bubble b4"/>
      <div className="bubble b5"/>
      <div className="bubble b6"/>
      <div className="bubble b7"/>

      <TypingMultiline
        className="typing-1"
        ContainerTag="span"
        Tag="h2"
        strs={`${str1}`}
      />
      <div>
        <TypingMultiline
          className="typing-2"
          preDelay={5300}
          ContainerTag="span"
          Tag="h2"
          strs={`${str2}`}
        />

        <TypingMultiline
          className="typing-3"
          preDelay={5700}
          ContainerTag="span"
          Tag="h2"
          strs={`${str3}`}
          onDone={() => setShow(true)}
        />
      </div>
      {show && (
        <div className="Link-area">
          <div className="my-link">
            <Button variant="primary" className="blog">
              #Cafe
            </Button>
            <Button variant="primary" className="blog">
              #Catering
            </Button>
            <Button variant="primary" className="blog">
              #Home-cooked meal
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
