import styled from '@emotion/styled';
import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CheckboxBase = styled(Box)<{ checked?: boolean }>`
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
`;

const CheckIconStyled = styled(CheckIcon)<{ checked?: boolean }>`
  position: absolute;
  bottom: 14px;
  left: 14px;
  color: #4caf50;
  transition: opacity 0.2s ease-in-out;
`;

export { CheckboxBase, CheckIconStyled };
