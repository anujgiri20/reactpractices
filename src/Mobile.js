import React, { useState } from "react";
import { Card } from './App';

//making new component and exporting it as new file
export function Mobile() {
    const mobile = [
        {
            brand: "nokia",
            model: "z033",
            description: "very large and light mobile and then its not in veryy high price so it is very ceap thinf and although ut is available evry where"
        },
        {
            brand: "nokia",
            model: "z033",
            description: "very large and light mobile and then its not in veryy high price so it is very ceap thinf and although ut is available evry where"
        },
        {
            brand: "nokia",
            model: "z033",
            description: "very large and light mobile and then its not in veryy high price so it is very ceap thinf and although ut is available evry where"
        }
    ];
    const [Bbrand, setBbrand] = useState(mobile);
    const [Color, setColor] = useState("grey");
    const [Mobilename, setMobilename] = useState("")
    const [Brandname, setBrandname] = useState("")
    const [Disname, setDisname] = useState("")
   const foo=()=>{
       setMobilename("")
   }
    const poll = () => {
        const newBrand = {
            brand: Mobilename,
            model: Brandname,
            description: Disname

        }
        setBbrand([...Bbrand, newBrand]);
        console.log(Mobilename, Brandname, Disname)
        
// we give below code to only empty the three fileds input after click event or after clck button
        
       
    }

    // we are using set color because see if we only use color and use state
    //then react does not know the upadated value 
    //when value is upadatted then it is updated to new value using setcolor
    return (
        <div>
            <div>
                {/* we are goin to add this information ass new card */}
                {/* see here the problem is we write data but how to capture that data and reflect back on screen taht is
                problem for this we use some method which we see next ok 
                when ever we want to use variable and reflect it by taking value then you can use useState hook for eg look input color*/}

                {/* here we want to actually chnaage color with the help of setcolor
           so how we capture that event ..with the help of onChange*/}
                {/*here event is the value which we change but it changes to other color
            with the help of setColor...setcolor can change as we type something 
            bec we are writeng event.target.value which eventuly capture and act as button
            to reflect and capture values  */}
                {/* this are event handlers search and read */}
                <input placeholder={Color}
                    onChange={(event) => setColor(event.target.value)}
                    style={{ background: Color }} />



                <br />
                <input
                value = {Mobilename} 
                onChange={(event) => { setMobilename(event.target.value) }} placeholder="mobile name" />
              
                <br />
                <input value= {Brandname} onChange={(event) => { setBrandname(event.target.value) }} placeholder="model number" />
                <br />
                <input value={Disname} onChange={(event) => { setDisname(event.target.value) }} placeholder="discription" />
                <br />
                <button onClick={poll,foo} 
                  >Add poll</button>

            </div>

            <div>
                {Bbrand.map((mobile , index) => (
                    <Card
                        key={index}
                        name={mobile.brand}
                        model={mobile.model}
                        desc={mobile.description} />
                ))}
            </div>
        </div>
    );
}
