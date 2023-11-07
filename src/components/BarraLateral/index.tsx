import styled from "styled-components"
import NavBar from "./NavBar"
import React from "react"

const StylizedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 236px;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <StylizedList>
                    <NavBar 
                        activeIcon="/icones/home-ativo.png" 
                        inactiveIcon="/icones/home-inativo.png"
                        active={true}
                    >
                        Início
                    </NavBar>
                    <NavBar 
                        activeIcon="/icones/mais-vistas-ativo.png" 
                        inactiveIcon="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </NavBar>
                    <NavBar 
                        activeIcon="/icones/mais-curtidas-ativo.png" 
                        inactiveIcon="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </NavBar>
                    <NavBar 
                        activeIcon="/icones/novas-ativo.png" 
                        inactiveIcon="/icones/novas-inativo.png"
                    >
                        Novas
                    </NavBar>
                    <NavBar 
                        activeIcon="/icones/surpreenda-me-ativo.png" 
                        inactiveIcon="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me!
                    </NavBar>
                </StylizedList>
            </nav>
        </aside>
    )
}

export default SideBar