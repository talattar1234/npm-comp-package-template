import React from 'react';
import Button from '@mui/material/Button';

interface MyButtonProps {
  /**
   * The label of the button
   */
  label: string;

  /**
   * The color of the border
   */
  borderColor: string;

  /**
   * onClick handler
   * @returns void
   */
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyButton = (props: MyButtonProps) => {
  const { label, borderColor, onClick } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ border: `2px solid ${borderColor}` }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
MyButton.defaultProps = {
  borderColor: 'initial',
};

export default MyButton;
