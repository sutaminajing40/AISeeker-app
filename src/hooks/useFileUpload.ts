import { useRef, useState } from "react";
import axios from "axios";

export function useFileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setIsUploading(true);
      setUploadError(null);

      try {
        const formData = new FormData();
        formData.append("file", file);

        await axios.post(
          `/api/pdf?fileName=${encodeURIComponent(file.name)}`,
          formData
        );

        console.log("PDFのアップロードが成功しました:", file.name);
      } catch (error) {
        console.error("PDFのアップロード中にエラーが発生しました:", error);
        setUploadError(
          "PDFのアップロードに失敗しました。もう一度お試しください。"
        );
      } finally {
        setIsUploading(false);
      }
    } else {
      setUploadError("有効なPDFファイルを選択してください");
    }
  };

  const triggerFileUpload = () => fileInputRef.current?.click();

  return {
    fileInputRef,
    handleFileUpload,
    triggerFileUpload,
    isUploading,
    uploadError,
  };
}
