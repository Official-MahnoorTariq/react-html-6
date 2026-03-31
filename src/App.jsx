import Address from "./components/Address";
import Contact from "./components/Contact";
import Edu from "./components/Edu";
import Email from "./components/Email";
import Experience from "./components/Experience";
import Heading from "./components/Heading";
import Img from "./components/Img";
import Language from "./components/Language";
import Name from "./components/Name";
import Profile from "./components/Profile";
import Tech from "./components/Tech";
import Title from "./components/Title";

export default function App(){
  return(
    <>
    <Title/>
    <Heading/>
    <div>
      <Img/>
      <Name/>
      <Contact/>
      <Email/>
      <Address/>
      <Profile/>
      <Edu/>
      <Experience/>
      <Tech/>
      <Language/>
    </div>
    </>
  );
}