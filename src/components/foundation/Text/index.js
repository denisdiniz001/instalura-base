import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { variantToStyle } from '../../../theme/utils/variantToStyle';

const paragraph1 = css`${() => variantToStyle('paragraph1')}`;
const smallestException = css`${() => variantToStyle('smallestException')}`;
const title = css`
    ${() => variantToStyle('titleXS')}
    ${breakpointsMedia({
        md: css`${() => variantToStyle('title')}`,
    })}
`;

const TextBase = styled.span`
    ${({variant}) => variantToStyle(variant)};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
`;

export const TextStyleVariants = {
    smallestException,
    paragraph1,
    title
  };  

export default function Text({tag, variant, children, ...props}) {
    return (
        <TextBase
            as={tag}
            variant={variant}
            {...props}
        >
            {children}
        </TextBase>
    );
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}; 

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1'
}