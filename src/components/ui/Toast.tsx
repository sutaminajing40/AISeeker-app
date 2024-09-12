import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface ToastNotificationProps {
  uploadStatus: "success" | "error";
  fileName: string | null;
  isLeaving: boolean;
}

export function ToastNotification({
  uploadStatus,
  fileName,
  isLeaving,
}: ToastNotificationProps) {
  return (
    <div
      className={`fixed bottom-4 right-4 rounded-md p-4 shadow-lg transition-all duration-300 ease-in-out ${
        uploadStatus === "error"
          ? "bg-red-100 text-red-800"
          : "bg-green-100 text-green-800"
      } ${
        isLeaving ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center">
        {uploadStatus === "success" && (
          <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
        )}
        {uploadStatus === "error" && (
          <XCircle className="mr-2 h-5 w-5 text-red-500" />
        )}
        <div>
          <h2 className="font-semibold">
            {uploadStatus === "success" && "アップロード成功"}
            {uploadStatus === "error" && "アップロード失敗"}
          </h2>
          <p className="text-sm">
            {uploadStatus === "success" &&
              fileName &&
              `ファイル名: ${fileName}`}
            {uploadStatus === "error" &&
              "PDFのアップロードに失敗しました。もう一度お試しください。"}
          </p>
        </div>
      </div>
    </div>
  );
}
