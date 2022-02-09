import {Container} from './style'
import { useState } from 'react'

export function ToggleTheme(){
const [ Theme , setTheme] = useState(false)

 function handletoggleTheme() {
     if(Theme) { 
        document.body.style.setProperty('--background',"#f8f2f5")
        document.body.style.setProperty('--color',"#fff")
        document.body.style.setProperty('--text' ,"#333")
        document.body.style.setProperty('--default-color',"#4d5bf9")
        setTheme(false)
     }else {
        document.body.style.setProperty('--background',"#181c1e")
        document.body.style.setProperty('--color',"#fff")
        document.body.style.setProperty('--text' ,"#797979")
        document.body.style.setProperty('--default-color',"#102E46")
        setTheme(true)
     }
    //document.body.classList.toggle('dark')
 }
    return (
        <Container>
            <input 
                type="checkbox" 
                className="ToggleTheme" 
                id="ToggleTheme"
                onChange={handletoggleTheme}
            />
            <label className='label' htmlFor="ToggleTheme">
                <i className="fa fa-moon"></i>
                <i className="fa fa-sun"></i>
                <div className="ball"></div>
            </label>
        </Container>
    )
}