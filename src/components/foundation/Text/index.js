import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

const paragraph1 = css`
  ${({ theme }) => css`
        ${get(theme.typographyVariants, 'paragraph1')}
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
        ${get(theme.typographyVariants, 'smallestException')}
  `}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
};

const TextBase = styled.span`
    ${({theme, variant}) => {
        if(!variant) return;
        return get(theme.typographyVariants, variant);
    }}
`;

export default function Text({tag, variant, children}) {
    return (
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'smallestException']),
}; 

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}