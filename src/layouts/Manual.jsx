import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Manual() {
  const [numPages, setNumPages] = useState(null);
  let { manualId } = useParams();

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>{`${manualId}`.toUpperCase()}</h1>
      </header>
      <div className="Example__container">

        <div className="Example__container__document">
          <Document
            file={`/manual/${manualId}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
  );
}
