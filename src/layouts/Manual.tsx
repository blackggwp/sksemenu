import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import RenderPdf from './RenderPdf';

export default function Manual() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <RenderPdf />
      </Container>
    </>
  );
}
