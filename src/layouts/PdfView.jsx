import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import pdf from '../assets/ox.pdf'
import Nav from '../components/Navbars/Nav'
 
const PdfView = () => {
    return (
      <div
      style={{
        marginTop: 60,
      }}
      >
        <Nav/>
        <PDFViewer
            document={{
                url: pdf,
            }}
        />
      </div>
    )
}
 
export default PdfView