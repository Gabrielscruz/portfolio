import { TemplateContainer , Main, Header, Container} from './style'
import { Sidebar }  from '../../components/Sidebar'
import { ToggleTheme } from '../../components/ToggleTheme'
import { Logo } from '../../components/Logo'


export function Template({children}:any){
    return (
        <TemplateContainer>
            <Sidebar/>
            <Main>
                <Header>
                        <Logo/>
                        <ToggleTheme/>
                </Header>
                <Container >
                    {children}
                </Container>
            </Main>
        </TemplateContainer>
        )
}