import "assets/styles/reset.css";
import "assets/styles/common.css";
import { pdfjs } from "react-pdf";
import UserProvider from "contexts/utils/test/submit/user";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
    </>
  );
}
