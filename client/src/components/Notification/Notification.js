import React from 'react';
import styled from 'styled-components'

const StyledNotification = styled.div`
    max-width: 500px;
    width: 90vw;
    height: 200px;
    padding: 10px;
    border-radius: 4px;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #FFF;
    box-shadow: #000 0 2px 18px;
    
    
`;

export default function Notification(props) {
    return (
        <StyledNotification>{props.children}</StyledNotification>
    );
}
