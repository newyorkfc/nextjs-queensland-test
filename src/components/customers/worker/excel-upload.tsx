import axios from "axios";
import { useState } from "react";

export default function ExcelUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      alert("Select a file first.");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker-excel?do=add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <h2>Excel Upload</h2>
      <p>
        Only limited format Excel files can be uploaded. (.xlsx, .xls)
        <br />
        When writing names, please use a space between the first name and the
        last name. (e.g. John Smith)
        <br />
        Date of birth should be written in the format of day.month.year. (e.g. 1.1.1990)
        <br />
        For gender, do not enter any value other than {"'"}Male{"'"} or {"'"}
        Female{"'"}.<br />
        Please write the address in the order of street name, street number,
        area, state, and postal code. (11 Mortimer, Caboolture QLD 4510)
        <br />
        You can download the Excel format by clicking the link.
      </p>
      <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
      <button onClick={uploadFile}>Upload</button>
    </>
  );
}
