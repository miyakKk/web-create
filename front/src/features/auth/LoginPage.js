// features/auth/LoginPage.jsx
import React, { useState } from 'react';
import { login } from '../../services/authService';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await login(email, password);
      console.log('ログイン成功:', result);

      // localStorage.setItem('token', result.token);
      // navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'ログインに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          ログイン
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          {error && (
            <Box mb={2}>
              <Alert severity="error">{error}</Alert>
            </Box>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
