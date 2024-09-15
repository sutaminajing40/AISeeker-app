import React from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
import { ToastNotification } from "@/components/ui/Toast";
import { UploadButton } from "@/components/chat/FileUploadButton";

export function FileUpload() {
  const {
    isLoading,
    uploadStatus,
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
          uploadStatus={uploadStatus}
          fileName={fileName}
          isLeaving={isToastLeaving}
        />
      )}
    </>
  );
}
