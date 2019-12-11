import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledCardArticle = styled.article`
  padding: 25px;
  overflow: hidden;
`;

const CardFooter = styled.p`
  color: #4f5766;
  font-size: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
`;

const CardListItemsCollection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const CardListItem = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
}
`;


const CardListItemName = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
`;

const CardListItemValue = styled.div`
  font-size: 0.875rem;
  color: #4F5766;
`;


function CardArticle({title, footer, listItems}) {
    const cardlistItems = (listItems && listItems.length > 0)
        ? (
            <CardListItemsCollection>
                {listItems.map(item =>
                    <CardListItem key={item.name}>
                        <CardListItemName>{item.name}</CardListItemName>
                        <CardListItemValue>{item.value}</CardListItemValue>
                    </CardListItem>
                )}
            </CardListItemsCollection>
        )
        : null;

    return (
        <StyledCardArticle>
            <CardTitle>{title}</CardTitle>
            {cardlistItems}
            <CardFooter>{footer}</CardFooter>
        </StyledCardArticle>
    );
}

CardArticle.propTypes = {
    title: PropTypes.string,
    footer: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }))
};

CardArticle.defaultProps = {
    listItems: []
};

export default CardArticle;

