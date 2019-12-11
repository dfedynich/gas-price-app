import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledAppLayout = styled.section`
    width: 90%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    padding: 60px 0;
    background: #f9fafc;
    min-height: 100vh;
`;

export default function AppLayout(props) {
    return <StyledAppLayout>{props.children}</StyledAppLayout>
}
