import styled from 'styled-components';
import { Stepper } from '@material-ui/core';

export const StepperWrapper = styled(Stepper)`
  && {
    background: ${({ theme }) => theme.palette.background.paper};
  }
`