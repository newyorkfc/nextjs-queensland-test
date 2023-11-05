import { useRouter } from "next/router";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import NavigationButton from "components/papers/contract-form/navigation-button";

export default function Pdf() {
  const router = useRouter();
  const companyName = router.query.companyName;
  const pdfUrl = process.env.NEXT_PUBLIC_PDF_URL;
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <section className="paper">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">{companyName}</h1>
        </div>
        <div className="content">
          <div>
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              key={numPages}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderTextLayer={false}
                />
              ))}
            </Document>
          </div>
        </div>
        <NavigationButton
          nextPath={`/papers/contract-form/${companyName}/personal`}
          currentPage={1}
        />
      </div>
    </section>
  );
}
