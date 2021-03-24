import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Loading from '../components/Loading'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

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

function RenderPdf() {
  const [numPages, setNumPages] = useState(null);
  let { manualId } = useParams();

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div style={{ textAlign: '-webkit-center' }}>
      <header>
        <h1>{`${manualId}`.toUpperCase()}</h1>
      </header>
      <div className="Example__container__document">
        <Document
          file={`/manual/${manualId}.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loading />}
          options={options}
        >
          {
            Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                  loading={<Loading />}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
              ),
            )
          }
        </Document>
      </div>
    </div>
  );
}
