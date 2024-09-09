import { useRef } from "react";

export function useFileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      console.log("Uploading PDF:", file.name);
      // ここでPDFアップロードのロジックを実装します
    } else {
      console.error("有効なPDFファイルを選択してください");
    }
  };

  const triggerFileUpload = () => fileInputRef.current?.click();

  return { fileInputRef, handleFileUpload, triggerFileUpload };
}
