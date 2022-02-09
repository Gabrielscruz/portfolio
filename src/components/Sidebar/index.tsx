import {Container} from './style'
import { useState } from 'react'
import { Link , useParams} from 'react-router-dom'

export function Sidebar() {
    const [ toggle , SetToggle ] = useState(false)
    const { category } = useParams()

    function ActiveList() {
        SetToggle(false)
        document.body.style.setProperty('--widthSidebar',"120px")
    }
    
    return (
        <Container>
            <div className={toggle?'navigation active':'navigation'}>
                <ul>
                    <li 
                        className={category === undefined ?'list active' :'list'}
                        
                    >
                        <b></b>
                        <b></b>
                        <Link
                            to='/'
                            onClick={ () => ActiveList()}
                        >
                            <i className="fas fa-smile-wink"></i>
                            <span className='title'>Sobre Mim</span>
                        </Link>
                    </li>
                    <li 
                        className={category === 'Front-End' ?'list active' :'list'}
                        
                    >
                        <b></b>
                        <b></b>
                        <Link
                            to='/Projetos/Front-End'
                            onClick={ () => ActiveList()}
                        >
                            <i className="fas fa-columns"></i>
                            <span className='title'>Front-End</span>
                        </Link>
                    </li>
                </ul>
            </div>
        

        <button  
            className={toggle?'toggle active': 'toggle'}
            onClick={() => { 
                SetToggle(!toggle)
                if(toggle)
                    document.body.style.setProperty('--widthSidebar',"120px")
                else{
                    document.body.style.setProperty('--widthSidebar',"320px")
                }
            }}
        >
            <i className={toggle?'fas fa-times':'fas fa-bars'}></i>
        </button>
        </Container>

    ) 
}