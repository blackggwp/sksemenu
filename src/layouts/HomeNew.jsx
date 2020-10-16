import React from 'react';
import Menu from './MenuNew';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useParams } from "react-router-dom";

export default function HomeNew(props) {
  let { brandid } = useParams();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Menu
          brandid={brandid}
        />
      </Container>
    </>
  );
}
