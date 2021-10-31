import React from "react";
import Counter from "./Counter";
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"


//RENDERING METHOD

//this is how to test any html tag... 
test("headerRenders", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("header")

    expect(headerid.textContent).toBe("counter")
})


//this is how to test any html tag... 
test("Counter is equal to 0", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("counter_b")

    expect(headerid.textContent).toBe("0")
})

//testing for the INPUT
test("input contains ", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("input_a")

    expect(headerid.value).toBe("1")
})

//add button tesing
test("add button", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("add_btn")

    expect(headerid.textContent).toBe("+")
})


//Substract button tesing
test("minus button", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("minus_btn")

    expect(headerid.textContent).toBe("-")
})



// fireEVENT METHOD

//testing the input when we change a value
test("input fireevent", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("input_a")

    fireEvent.change(headerid, {
        target: {
            value: "5"
        }
    })

    expect(headerid.value).toBe("5")
})


//for the addition btn
test("plus btn", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("add_btn")
    const counter1 = Compound.getByTestId("counter_b")
   

    expect(counter1.textContent).toBe("0")
   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("1")
})


//for the substract button
test("the minus btn", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("minus_btn")
    const counter1 = Compound.getByTestId("counter_b")
   

    expect(counter1.textContent).toBe("0")

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("-1")
})

//testing if thechanging input value and clicking on add btn works correctly
test("add button", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("add_btn")
    const counter1 = Compound.getByTestId("counter_b")
    const input1 = Compound.getByTestId("input_a")
   
    fireEvent.change(input1, {
        target: {
            value: "5"
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("5")
})


//testing if thechanging input value and clicking on add btn works correctly
test("minus button", ()=>{
    const Compound = render(<Counter/>)
    const headerid = Compound.getByTestId("minus_btn")
    const counter1 = Compound.getByTestId("counter_b")
    const input1 = Compound.getByTestId("input_a")
   
    fireEvent.change(input1, {
        target: {
            value: "5"
        }
    })
    

   fireEvent.click(headerid)
   expect(counter1.textContent).toBe("-5")
})