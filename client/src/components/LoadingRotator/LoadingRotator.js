

import React, {Fragment}  from 'react';
import styled from 'styled-components'

const LoadingRotatorContainer = styled.div`
  text-align: center;
`;

const StyledLoadingRotator = styled.span`
    animation: spin 1000ms infinite linear;
    border: 3px solid #fff;
    border-radius: 50%;
    border-top-color: #4B6A90;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default function LoadingRotator(props) {
    return <LoadingRotatorContainer>
        <StyledLoadingRotator />
        {props.children}
    </LoadingRotatorContainer>
}
