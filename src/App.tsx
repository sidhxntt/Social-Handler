import { AnimatedPinDemo } from "./components";

function App() {
  return (
    <>
      <AnimatedPinDemo
        path1="/linkedin.jpeg"
        handler1="LinkedIn"
        link1="https://www.linkedin.com/in/siddhant-gupta-885384239/"

        path2="/github.jpeg"
        handler2="Github"
        link2="https://github.com/sidhxntt"

        path3="/x.jpeg"
        handler3="Twitter (X)"
        link3="https://x.com/sidhxntt"
      />
      <AnimatedPinDemo
        path1="/dev.jpeg"
        handler1="DEV.TO"
        link1="https://dev.to/sidhxntt/"

        path2="/medium.jpeg"
        handler2="Medium"
        link2="https://medium.com/@sidhxntt/"

        path3="/INSTAGRAM.jpeg"
        handler3="Instagram"
        link3="https://www.instagram.com/sidxntt/"
      />
    </>
  );
}

export default App;
