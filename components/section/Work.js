import React from "react";
import Button from "../Button";
import Card from "../Card";
import cvpro from "../../public/assets/image/CVPRO.png";
import flappybird from "../../public/assets/image/FlappyBird.png";
import TMR from "../../public/assets/image/TMR.png";
import ASCIIWebcam from "../../public/assets/image/ASCIIWebcam.png";
import BMIF from "../../public/assets/image/BMIF.png";
import mohakml from "../../public/assets/image/mohakml.png";

const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
        <Card
          src={cvpro}
          alt="CVPRO"
          link="https://github.com/Mohak-CODING-HEAVEN/CVPRO"
          title="CVPRO"
          date="JAN 21 - Present"
          description="Computer Vision Helping Library | This is a Computer vision package that makes its easy to run Image processing and AI functions. At the core it uses OpenCV and Mediapipe libraries."
        />
        <Card
          src={flappybird}
          alt="Flappy Bird AI"
          link="https://github.com/Mohak-CODING-HEAVEN/NEAT-Flappy-Bird"
          title="Flappy Bird AI"
          date="FEB 21"
          description="This is a Flappy Bird AI that uses NEAT Algorithm to train a Flappy Bird AI. The AI is trained using a genetic algorithm and the fitness function is the distance between the bird and the pipe."
        />
        <Card
          src={TMR}
          alt="The Matrix Rain"
          link="https://github.com/Mohak-CODING-HEAVEN/The-Matrix-Rain"          
          title="The Matrix Rain"
          date="FEB 22"
          description="This is a Matrix Rain Simulation using Vanilla Javascript with some controls."
        />
        <Card
          src={ASCIIWebcam}
          alt="ASCII Webcam"
          link="https://github.com/Mohak-CODING-HEAVEN/WebCam-to-ASCII"
          title="Webcam to ASCII"
          date="FEB 22"
          description="Using p5.js to do ASCII conversion of webcam frames."
        />
        <Card
          src={BMIF}
          alt="BMI Fluttter"
          link="https://github.com/Mohak-CODING-HEAVEN/NEAT-Flappy-Bird"
          title="BMI Calculator using Flutter"
          date="JAN 22"
          description="This is a BMI Calculator made using FLutter."
        />
        <Card
          src={mohakml}
          alt="mohak.ml"
          link="https://github.com/Mohak-CODING-HEAVEN/Personal-Website"
          title="Old Portdolio"
          date="JAN 22"
          description="Make using Vanilla Javascript and CSS. Also Jquery and other 3rd party libraries."
        />
      </div>
      <div className="md:pt-16 mx-auto text-center">
        <Button href="https://github.com/Mohak-CODING-HEAVEN/">View More</Button>
      </div>
    </>
  );
};

export default Work;
