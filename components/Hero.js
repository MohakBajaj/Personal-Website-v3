import Social from "./Social";
import Lottie from 'react-lottie-player'
import lottieJson from "../public/hero_animation.json"

const Hero = () => {
  return (
    <div className="grid grid-cols-3 gap-5" id="home">
      <div className="flex h-screen lg:px-4 md:h-96 justify-center items-center md:justify-start col-span-2">
        <div className="text-center md:text-left ">
          <p className="font-primary font-medium text-4xl sm:text-5xl md:text-6xl text-gray-500 dark:text-gray-300">
            Mohak Bajaj
          </p>
          <p className="font-primary font-medium text-4xl sm:text-5xl md:text-6xl text-gray-500 dark:text-gray-300 mt-5">
            Full Stack Developer💪 <br/> Machine Learning Enthusiast👨‍💻
          </p>
          <div className="flex items-center justify-center mt-10 sm:hidden">
            <Social />
          </div>
        </div>
      </div>
      <Lottie
      loop
      animationData={lottieJson}
      play
      />
    </div>
  );
};

export default Hero;
