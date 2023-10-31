import { RootState } from "pages/queensland/app/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Contract() {
  const selectedCompany = useSelector(
    (state: RootState) => state.company.selectedCompany
  );
  return (
    <>
      <h2>{selectedCompany.name}</h2>
      <h3>Personal Details</h3>
    </>
  );
}
