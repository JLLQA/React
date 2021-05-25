// import First from "./Components/01-Intro/First";
// import Second from "./Components/01-Intro/Second";

import Container from "./Components/02_Parent-Child/Container"
import Parent from "./Components/03_Props/01-Simple/Parent"
import PropsWithDifferentTypes from "./Components/03_Props/02-Intermediate/PropsWithDifferentTypes"
import Start from "./Components/03_Props/ContactCard/Start"
import WIPContact from "./Components/03_Props/ContactCard/WIPContact"
import Blog from "./Components/03_Props/staticDataTask/Blog"
import Comments from "./Components/03_Props/staticDataTask/Comment"
import Clock from "./Components/04_Life/Clock"
import Game from "./Components/05_States/Game"
import ControlledInput from "./Components/06_Forms/ControlledInput"
import Car from "./Components/05_States/Exercise/Car"


const App = () => {
    return (
        <div>
            { /* <Container/> */}
            { /* <Parent/> */}
            { /* <PropsWithDifferentTypes/> */}
            { /* <Start/> */}
            { /* <WIPContact/> */}
            { /* <Blog/> */}
            {/* <Comments/> */}
            {/* <Clock/> */}
            {/* <Game/> */}
            {/* <ControlledInput /> */}
            <Car/>
        </div>
    );
}

export default App;