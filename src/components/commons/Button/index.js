import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background-color: transparent;
`;

const ButtonDeafult = css`
    color: white;
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 36px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;   

    ${function(props) {
        console.log(props);
        if(props.ghost){
            return ButtonGhost;
        }
        return ButtonDeafult;
    }}

    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover,
    &:focus {
        opacity: .5;
    }
`;