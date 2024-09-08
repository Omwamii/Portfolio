import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import cs50cert from "../../Assets/CS50W.pdf";
import sqlCert from "../../Assets/sqlcert.pdf";
import responsiveCert from "../../Assets/responsive.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Certs() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const SetScale= (isSql = false) => {
    if (width > 786) {
      if (!isSql) {
        return 1.7
      }
      return 1.1
    } else if (width < 786 && width > 500) {
      if (!isSql) {
        return 0.6
      }
      return 0.4
    } else {
      if (!isSql) {
        return 0.4
      }
      return 0.25;
    }
  }
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document file={cs50cert} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={SetScale()} />
          </Document>
        </Row>
        <br />
        <Row className="resume">
          <Document file={sqlCert} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={SetScale(true)}  />
          </Document>
        </Row>
        <br />
        <Row className="resume">
          <Document file={responsiveCert} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={SetScale()} />
          </Document>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default Certs;