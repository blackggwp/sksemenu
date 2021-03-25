import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import Loading from '../components/Loading'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function RenderPdf() {
  const [numPages, setNumPages] = useState<number>(1);
  let { manualid } = useParams<RouteParamTypes>();

  function onDocumentLoadSuccess(pdf: pdfjs.PDFDocumentProxy) {
    setNumPages(pdf.numPages);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>{`${manualid}`.toUpperCase()}</h1>
      </header>
      <div className="Example__container__document">
        <Document
          file={`/manual/${manualid}.pdf`}
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