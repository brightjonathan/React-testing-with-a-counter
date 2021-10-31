//importing react-library/react
import {render, fireEvent} from '@testing-library/react'

//import the component
import Search from './Search'

//it() is a keyword for testing
//this function is use for testing your input
it("inputbtn", ()=>{
    const {queryByTitle} = render(< Search/>)
    const input = queryByTitle("searchinput")
    expect(input).toBeTruthy()
})


//decribing an event when inputing
//know this method
describe("changeinput", ()=>{
    it("onChange", ()=>{
        const {queryByTitle} = render(< Search/>)
        const input = queryByTitle("searchinput")
        fireEvent.change(input, {target: {value: "Bright"}})
        expect(input.value).toBe("Bright")
    })
})
