//this is how to test your button when clicked

//imported from testing-library
import {render, fireEvent} from '@testing-library/react'

//import the component for testing
import Button from './Button'

//it() is a keyword for testing
//this function is use for testing your button
it("chectButton", ()=>{
    const {queryByTitle} = render(<Button />);
    const btn = queryByTitle("clickbtn");
    expect(btn).toBeTruthy();
})

//describing an event when click
//know this method
describe("clickMe", ()=>{
    it("onClick", ()=>{
        const {queryByTitle} = render(<Button />);
        const btn = queryByTitle("clickbtn");

        expect(btn.innerHTML).toBe("press Here")
        fireEvent.click(btn)
        expect(btn.innerHTML).toBe("you clicked")
    })
})
