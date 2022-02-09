import { useParams } from 'react-router-dom'
import { Template } from '../Template'
import { Content , Header, Main, Pagination } from './style'
import FrontEndIMG from './img/FrontEnd.svg'

export function Projects( ) {
    const { category } = useParams()
    
    return (
        <Template>
            <Content>
                <Header>
                    <div>
                        <img src={FrontEndIMG} alt={category}/>
                    </div>
                    <div>
                        <h1>Vou mostrar alguns projetos <br/> {category}</h1>
                    </div>
                    
                </Header>
               
                <Pagination>
                        <button>
                            <i className="fas fa-arrow-left"></i>
                        </button>

                        <div>
                            <button className="active">
                                1
                            </button>
                            <button>
                                2
                            </button>
                            <button>
                                3
                            </button>
                            <button>
                                4
                            </button>
                        </div>
                        
                        <button>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                        <button>
                            <i className="fas fa-arrow-up"></i>
                        </button>
                </Pagination>
                <Main>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Main>
                
            </Content>
        </Template>
    )
}