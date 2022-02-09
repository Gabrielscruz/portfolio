import {Container} from './style'
import { useState } from 'react'

export function Logo () {
    const [Name , SetName] = useState('GS')
return (
    <Container>
        <button onClick={() =>{  Name === 'GS' ? SetName('Gabriel Silva'): SetName('GS')}}>
            {Name}
        </button>
    </Container>
)
}