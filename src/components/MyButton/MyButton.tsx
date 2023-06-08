import React from 'react'
import Button from '@mui/material/Button'

const MyButton = ({ label = '', borderColor = 'initial' } = {}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ border: `px solid ${borderColor}` }}
    >
      {label}
    </Button>
  )
}

export default MyButton
