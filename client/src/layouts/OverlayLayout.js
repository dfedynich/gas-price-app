import React, {Fragment}  from 'react';
import styled from 'styled-components'

const StyledOverlayLayout = styled.div`
    position: fixed;
    width: 100%;
    opacity: 0.5;
    top: 0;
    left: 0;
    margin: 0;
    min-height: 200px;
    height: 100%;
    background-color: #000;
`;

const OverlayContent = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export default function OverlayLayout(props) {
    return (
        <Fragment>
            <StyledOverlayLayout />
            <OverlayContent>{props.children}</OverlayContent>
        </Fragment>
    );
}
