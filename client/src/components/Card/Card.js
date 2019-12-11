import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import CardThumb from './components/CardThumb';
import CardArticle from './components/CardArticle';
import HeroLayout from '../../layouts/HeroLayout';

const StyledCard = styled.section`
  background: white;
  box-shadow: 
     0 2px 4px 0 rgba(0,0,0,.04),
     0 4px 5px 0 rgba(0,0,0,.04),
     0 1px 10px 0 rgba(0,0,0,.05);
  border-radius: 4px;
`;

function Card({title, badgeTitle, avatarImage, thumbImage, footer, listItems }) {
    return (
        <StyledCard>
            <HeroLayout
                hero={
                    <CardThumb
                        badgeTitle={badgeTitle}
                        avatarImage={avatarImage}
                        thumbImage={thumbImage}
                    />
                }
                summary={
                    <CardArticle
                        title={title}
                        footer={footer}
                        listItems={listItems}
                    />
                }
            />
        </StyledCard>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    badgeTitle: PropTypes.string,
    avatarImage: PropTypes.string,
    thumbImage: PropTypes.string,
    footer: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),

};

Card.defaultProps = {
    listItems: []
};


export default Card;
