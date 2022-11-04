import React, {useState} from 'react';
import './App.css';
// import {Rating, RatingValueType} from "./Components/Rating/Rating";
// import {UnControllableRating} from "./Components/UnControllableRating/UnControllableRating";
// import {UnControllableAccordion} from "./Components/UnControllableAccordion/UnControllableAccordion";
// import {Accordion} from "./Components/Accordion/Accordion";
import {OnOff} from "./Components/OnOff/OnOff";

function App() {
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [onOff, setOnOff] = useState<boolean>(true)
    return (
        <div className={"App"}>
            {/*<PageTitle title={"This is App component"}/>*/}
            {/*Article 1*/}
            {/*<span><UnControllableRating/>*/}
            {/*<UnControllableRating/>*/}
            {/*<UnControllableRating/>*/}
            {/*<UnControllableRating/>*/}
            {/*<UnControllableRating/></span>*/}
            {/*<hr/>*/}
            {/*<Accordion titleValue={"Menu"} accordionCollapsed={accordionCollapsed} onClickCollapse={setAccordionCollapsed}/>*/}
            {/* Article2*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            <OnOff onClickOnOff={setOnOff} on={onOff}/>
            {/*<UnControllableAccordion />*/}

        </div>
    );
}

export default App;
