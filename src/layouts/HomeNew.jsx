import React from 'react';
import MenuNew from './MenuNew';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useParams } from "react-router-dom";

export default function HomeNew() {
  let { brandid } = useParams();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <MenuNew
          brandid={brandid}
        />
      </Container>
    </>
  );
}
