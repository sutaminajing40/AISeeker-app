import React from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
import { ToastNotification } from "@/components/ui/Toast";
import { UploadButton } from "@/components/chat/FileUploadButton";

export function FileUpload() {
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
