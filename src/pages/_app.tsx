import "assets/styles/reset.css";
import "assets/styles/common.css";
import { pdfjs } from "react-pdf";
import UserProvider from "contexts/utils/test/submit/user";
import NewContractProvider from "contexts/papers/contract/new-contract";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <NewContractProvider>
        {/* 테스트 */}
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </NewContractProvider>
    </>
  );
}
