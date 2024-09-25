import { useFileUpload } from "@/hooks/useFileUpload";
import { ToastNotification } from "@/components/ui/Toast";
import { UploadButton } from "@/components/chat/FileUploadButton";
import React, { useEffect } from "react";

type FileUploadProps = {
  setFileUploaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export function FileUpload({ setFileUploaded }: FileUploadProps) {
  const {
    isLoading,
    uploadResponce,
    fileName,
    isToastVisible,
    isToastLeaving,
    fileInputRef,
    handleFileUpload,
    triggerFileUpload,
  } = useFileUpload();

  useEffect(() => {
    if (uploadResponce.success) {
      setFileUploaded(true);
    }
  }, [uploadResponce.success, setFileUploaded]);

  return (
    <>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <UploadButton isLoading={isLoading} onClick={triggerFileUpload} />
      {isToastVisible && (
        <ToastNotification
          isSuccess={uploadResponce.success}
          title={
            uploadResponce.success ? "アップロード成功" : "アップロード失敗"
          }
          message={
            uploadResponce.success
              ? `ファイル名: ${fileName}`
              : uploadResponce.errorMessage
          }
          isLeaving={isToastLeaving}
        />
      )}
    </>
  );
}
