import { Paper } from '@material-ui/core';
import styled from 'styled-components';

export const FormWrapper = styled(Paper)`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    border-radius: 5px;
    background: ${({ theme }) => theme.palette.background.paper};
  }
`;