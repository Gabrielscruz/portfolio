import { Template } from '../Template';
import { Content, Title , Perfil, Skills, Contact} from './style'

export function Aboutme() {

    interface BarSkillsProps{
        Title: string;
        Porcent: number;
    }

    function BarSkills(props:BarSkillsProps){
       
        return (
            <div>
                    <h3>{props.Title}</h3>
                        <span style={{   marginLeft: props.Porcent-3 + '%'}}>{props.Porcent + '%'}</span>
                        <div>
                            <div style={{width: props.Porcent + '%'}}>                          
                            </div>        
                        </div>
                    </div>
        )
    }

    return (
        <Template>
            <Content>
            <Title>
                <h2>Vou contar um pouco sobre mim...</h2>
            </Title>
            <Perfil>
                <div>
                    <img src={'https://media-exp1.licdn.com/dms/image/C4D03AQGVd4k4HhAF9g/profile-displayphoto-shrink_800_800/0/1529022365068?e=1647475200&v=beta&t=VuLj6C73owkAOPMWJMIK_J4PnVlJb6BiRAVi7aAk-_E'} alt='perfil'/>
                </div>
                <div>
                    <p>
                    Formado em Gestão da tecnologia da informação sou entusiasta em tecnologia busco está sempre atualizado participei de diversos Bootcamp’s como desenvolvimento full stack, machine learning, React entre outros, mas sou apaixonado no desenvolvimento web.
                    </p>
                </div>
            </Perfil>
            <Contact>
                <a target="_blank" href="https://www.linkedin.com/in/gabriel-blz/">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a target='_blank' href='https://github.com/Gabrielscruz'>
                    <i className="fab fa-github"></i>
                </a>

                <a target='_blank' href='https://www.youtube.com/channel/UCpQYgA_Lvmyg6z2usJ8fTiA'>
                    <i className="fab fa-youtube"></i>
                </a>

                <a target='_blank' href='https://www.instagram.com/aceleradev/'>
                    <i className="fab fa-instagram"></i>
                </a>
            </Contact>
            <Skills>
                <div>
                    <h3>Perfil
                    <p>
                        Adoro programação, desafios em geral me divirto demais durante os projetos.
                    </p>
                    </h3>

                    <span>
                        Nome:
                        <p>Gabriel Da Silva Cruz</p>
                    </span>

                    <span>
                        Nascimento:
                        <p>29 de Junho de 1997</p>
                    </span>

                    <span>
                        Cargo Atual:
                        <p>Analista Mis (Management Information System)</p>
                    </span>

                    <span>
                        WebSite:
                        <p>{'https://aceleradev-frontend.herokuapp.com/'}</p>
                    </span>

                    <span>
                        Email:
                        <p>Gabriel-blz@outlook.com.br</p>
                    </span>
                
                </div>

                <div className='Skills'>

                    <span className='description'>
                        <h3>Skills</h3>
                        <p>É aproveitamentos dos meus cursos da IGTI <strong>(Instituto de Gestão e Tecnologia da Informação)</strong>.</p>
                    </span>

                    <BarSkills Title={'FRONT-END'} Porcent={82.09}/>
                    <BarSkills Title={'BACK-END'} Porcent={98.99}/>
                    <BarSkills Title={'ROBOT'} Porcent={69.55}/>
                    <BarSkills Title={'SQL-SERVER'} Porcent={95.99}/>
                    <BarSkills Title={'MACHINE-LEARNING'} Porcent={92.92}/>
                    <br/>
                    <br/>
                </div>
            </Skills>
            </Content>

        </Template>

    )
}