import React from 'react'
import Button from '@mui/material/Button'

const MyButton = ({ label = '', borderColor = 'initial', onClick } = {}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ border: `px solid ${borderColor}` }}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default MyButton
