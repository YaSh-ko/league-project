import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CheckboxBase = styled(Box)<{ checked?: boolean; theme?: Theme }>`
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => (props.checked ? '#4caf50' : 'gray')};
  border-radius: 5px;
  position: relative;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.checked &&
    `
    clip-path: polygon(80% 0, 80% 45%, 100% 45%, 100% 100%, 0 100%, 0 0);
  `}

  ${({ theme }) => theme?.breakpoints.down('sm')} {
    width: 18px;
    height: 18px;
    border-width: 1.5px;
  }
`;

const CheckIconStyled = styled(CheckIcon)<{ checked?: boolean; theme?: Theme }>`
  position: absolute;
  bottom: 14px;
  left: 14px;
  color: #4caf50;
  transition: opacity 0.2s ease-in-out;

  ${({ theme }) => theme?.breakpoints.down('sm')} {
    bottom: 10px;
    left: 12px;
    width: 20px;
  }
`;

export { CheckboxBase, CheckIconStyled };
