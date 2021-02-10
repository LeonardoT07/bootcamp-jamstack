import styled from 'styled-components';

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 36px;
    font-weight: bold;
    opacity: 1;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;