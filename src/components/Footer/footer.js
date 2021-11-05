import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Footer() {
    return (
        <FooterContainer>
            <Creators>
                Developers: &nbsp;
                <Adam href='https://www.linkedin.com/in/adam-reed1/' target="_blank">
                    Adam
                </Adam>
                &nbsp;
                &
                &nbsp;
                <Jose href='https://www.linkedin.com/in/joseriverathedev/' target="_blank">
                    Jose
                </Jose>
            </Creators>
        </FooterContainer>

    )
}

export default Footer;

const FooterContainer = styled.div`
display: flex;
justify-content: center;
position: fixed;
bottom: 0;
background: rgb(88,0,200, .9);
width: 200%;
transform: translateX(-25%);
height: 4em;
border-radius: 50% 50% 0 0;
`;

const Creators = styled.div`
display: flex;
flex-direction: row;
color: #FAF9F6;
padding-top: .75em;
font-family: 'SF Pro Display Medium';
font-size: 1.5em;


`

const Adam = styled.a`
text-decoration: none;
color: inherit;
&:hover {
    font-weight: bold;
}

`

const Jose = styled.a`
text-decoration: none;
color: inherit;
&:hover {
    font-weight: bold;
}

`



