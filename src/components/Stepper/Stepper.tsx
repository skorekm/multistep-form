import { Step, StepLabel } from '@material-ui/core';
import { StepperWrapper } from './Stepper.styles';

export const Stepper = ({ steps, current }:{ steps: string[], current: number }) => {
  return (
    <StepperWrapper activeStep={current} orientation={'horizontal'} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </StepperWrapper>
  );
}