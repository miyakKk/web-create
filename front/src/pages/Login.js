import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function LoginPage() {
  return (
    <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField sx={{backgroundColor:"1976d2"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        >ボタン</Button>
    </div>

  )
}
