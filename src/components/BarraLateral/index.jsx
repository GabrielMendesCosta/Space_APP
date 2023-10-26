import styled from "styled-components"
import ItemNavegação from "./itemNavegacao"

const ListaEstilizada = styled.ul`
    list-style:none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return(<>
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegação iconeAivo="/icones/home.png" iconeInativo="/icones/home-inativo.png">
                        Início    
                    </ItemNavegação>
                    <ItemNavegação iconeAivo="/icones/mais-vistas.png" iconeInativo="/icones/mais-vistas-inativo.png">
                        Mais vistas    
                    </ItemNavegação>
                </ListaEstilizada>
            </nav>
        </aside>
    </>)
}

export default BarraLateral