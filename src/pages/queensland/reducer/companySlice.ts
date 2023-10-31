import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company } from "pages/queensland/types/Company";

type CompanyState = {
  companies: Company[];
  selectedCompany: Company | null;
};

const initialState: CompanyState = {
  companies: [],
  selectedCompany: null
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
        state.companies = action.payload;
    },
    setSelectedCompany: (state, action: PayloadAction<Company>) => {
        state.selectedCompany = action.payload;
    }
  },
});

export const { setCompanies, setSelectedCompany } = companySlice.actions;

export default companySlice.reducer;
