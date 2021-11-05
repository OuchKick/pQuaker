import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



function Navbar() {
    return (
        <NavbarContainer>
            <Logo>
                pQuaker
            </Logo>
        </NavbarContainer>
    )
}

export default Navbar;


const NavbarContainer = styled.div`
    display: flex;
    background-color: #5800C8;
    height: 5em;
`

const Logo = styled.div`
    font-family: 'Platonica Regular';
    padding: .8em 0 0 3em;
    font-size: 2em;
    color: #FAF9F6;
    letter-spacing: .1em;
`
