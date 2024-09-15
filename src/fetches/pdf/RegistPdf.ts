import axios, { AxiosError } from "axios";

export const RegistPdf = async (
  file: File
): Promise<{ success: boolean; errorMessage: string }> => {
  if (file && file.type === "application/pdf") {
    try {
      const formData = new FormData();
      formData.append("file", file);

      await axios.post(
        `/api/pdf?fileName=${encodeURIComponent(file.name)}`,
        formData
      );

      return { success: true, errorMessage: "" };
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          success: false,
          errorMessage:
            error.response?.data?.message || "不明なエラーが発生しました。",
        };
      }
    }
  }
  return {
    success: false,
    errorMessage: "無効なファイル形式です。PDFファイルを選択してください。",
  };
};
