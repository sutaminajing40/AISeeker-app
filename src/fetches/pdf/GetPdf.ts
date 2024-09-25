import axios, { AxiosResponse } from "axios";
import { GetPdfResponse } from "../../types/pdf";

export const fetchRegisteredPDFs = async (): Promise<string[]> => {
  try {
    const response: AxiosResponse<GetPdfResponse> = await axios.get("/api/pdf");
    const data = response.data;
    return data.pdfList;
  } catch (error) {
    console.error("Error fetching registered PDFs:", error);
    return [];
  }
};
