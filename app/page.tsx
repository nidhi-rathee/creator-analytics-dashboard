"use client"; // We mark the homepage container as a client component so MUI can inject styles safely

import { Container, Typography, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }} color="primary">
          Creator Analytics Dashboard
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px' }}>
          Welcome back! Let's start building your enterprise platform metrics.
        </Typography>

        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}