import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

export default function Page404() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Oops! You're lost.</Typography>
        <Typography paragraph={true}>The page you are looking for was not found.</Typography>
      </Container>
    </>
  );
}
