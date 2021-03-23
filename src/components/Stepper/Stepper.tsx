import { Stepper as MUIStepper, Step, StepLabel } from '@material-ui/core';

export const Stepper = ({ steps, current }:{ steps: string[], current: number }) => {
  return (
      <div>
        <MUIStepper activeStep={current} orientation={'horizontal'}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </MUIStepper>
      </div>

  );
}