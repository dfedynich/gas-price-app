import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledHeroLayout = styled.section`    
    @media (min-width: 650px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap; 
    }
`;

const Summary = styled.article`
  flex-basis: 100%;
  
  @media (min-width: 650px) {
        flex: 2;  
  }
    
`;

const Hero = styled.article`
  flex-basis: 100%;
  
  @media (min-width: 650px) {
        flex: 1;  
  }
`;

export default function HeroLayout(props) {
    return (
        <StyledHeroLayout>
            <Hero>
                {props.hero}
            </Hero>
            <Summary>
                {props.summary}
            </Summary>
        </StyledHeroLayout>
    );
}
