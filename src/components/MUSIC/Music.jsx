import React from "react";
import s from "./Music.module.css";

const Music = (props) => {

    let oldArray = [
        "Dima",
        "Nina",
        "Lina",
        "Kina"
    ];

    // let newArray = oldArray.map ( name => {
    //         // return "<li>" + name + "</li>";  // sposob 1a
    //         return `<li>${name}</li>`;          // sposob 1b
    // });

    let newArray = oldArray.map (name => `<li>${name}</li>`);  // sposob 2

    // ------------------------------------------------------------------

    let oldArray2 = [
        {eng: "blabla", ua: "БЛАБЛА"},
        {eng: "hello", ua: "привіт"},
        {eng: "hi", ua: "здоров"},   
    ];

    let newArray2 = oldArray2.map( el => ( '<Message eng={el.eng} ua={el.ua} />' ) );


    return (
        <div>
            Music

            <ul>
                {newArray}
            </ul>

            {newArray2}



        </div>
    );
}

export default Music;