import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import pdf from '../assets/ox.pdf'
import CustomNav from '../components/Navbars/CustomNav'
 
const PdfView = () => {
    return (
      <div
      style={{
        marginTop: 60,
      }}
      >
        <CustomNav/>
        <PDFViewer
            document={{
                url: pdf,
            }}
        />
      </div>
    )
}
 
export default PdfView