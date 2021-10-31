//firstly, import the component

//imported component for testing 
import {multiply, makeLowerCase} from './Help'

//test() is a keyword for testing function
test("multiply", ()=> {
    expect(multiply(2, 10)).toBe(20)
    expect(multiply(3, 10)).toBe(30)
    
})


test("lowercase", ()=> {
    expect(makeLowerCase('BRIGht')).toBe('bright')
    expect(makeLowerCase('john')).toBe('john')
    
})