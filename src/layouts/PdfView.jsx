import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import pdf from '../assets/ox.pdf'
 
const PdfView = () => {
    return (
      <div
      style={{
        marginTop: 60,
      }}
      >
        <PDFViewer
            document={{
                url: pdf,
            }}
        />
      </div>
    )
}
 
export default PdfView