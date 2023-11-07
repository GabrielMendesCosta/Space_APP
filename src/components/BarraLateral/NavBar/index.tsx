import React from "react"
import styled from "styled-components"

interface liProps {
    $active: boolean
}

const StyledListItem = styled.li<liProps>`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
` 

interface NavBarProps {
    children: string
    activeIcon: string
    inactiveIcon: string
    active?: boolean
}

const NavBar = ({children, activeIcon, inactiveIcon, active = false} : NavBarProps) => {
    return<StyledListItem $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="" />
        {children}
    </StyledListItem>
}

export default NavBar