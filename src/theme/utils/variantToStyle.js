import { css } from 'styled-components';
import { breakpointsMedia } from './breakpointsMedia';
import get from 'lodash/get';

export function variantToStyle(variant) {
    return ({ theme }) => {

        if (typeof variant === 'object') {
        return css`
            ${breakpointsMedia({
                ...(variant.xs && {
                xs: css`${get(theme.typographyVariants, variant.xs)}`,
                }),
                ...(variant.sm && {
                sm: css`${get(theme.typographyVariants, variant.sm)}`,
                }),
                ...(variant.md && {
                md: css`${get(theme.typographyVariants, variant.md)}`,
                }),
                ...(variant.lg && {
                lg: css`${get(theme.typographyVariants, variant.lg)}`,
                }),
                ...(variant.xl && {
                xl: css`${get(theme.typographyVariants, variant.xl)}`,
                }),
            })}
        `;
        }

        return css`
            ${get(theme.typographyVariants, variant)}
        `;
    }
}