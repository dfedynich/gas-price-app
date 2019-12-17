import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledCardThumb = styled.div`
  display: flex;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  min-height: 200px;
  position: relative;
  
  height: 100%;
  border-radius: 4px;
`;

const CardAvatar = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const CardAvatarLink = styled.a`
  display: block;
  text-decoration: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  
  &:hover {
    box-shadow: 1px 1px 5px 3px #ffe500;
  }
`;

const CardAvatarImg = styled.img` 
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #CCC;
  background: #fff;
`;

const CardBadge = styled.div`
  background: #ffe500;
  position: absolute;
  top: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 5px 10px 5px 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,.3);
`;


function CardThumb({name, badgeTitle, avatarImage, avatarUrl, thumbImage}) {
    return (
        <StyledCardThumb bgUrl={thumbImage}>
            {badgeTitle &&
                <CardBadge>
                    {badgeTitle}
                </CardBadge>
            }
            {avatarImage &&
                <CardAvatar>
                    {avatarUrl
                        ? <CardAvatarLink
                            href={avatarUrl}
                            target="_blank"
                        >
                            <CardAvatarImg
                                src={avatarImage}
                                alt={name}
                            />
                        </CardAvatarLink>
                        : <CardAvatarImg
                            src={avatarImage}
                            alt={name}
                        />
                    }
                </CardAvatar>
            }
        </StyledCardThumb>
    );
}

CardThumb.propTypes = {
    badgeTitle: PropTypes.string,
    avatarImage: PropTypes.string,
    avatarUrl: PropTypes.string,
    thumbImage: PropTypes.string
};

export default CardThumb;

