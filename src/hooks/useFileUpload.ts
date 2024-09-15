import { RegistPdf } from "@/fetches/pdf/RegistPdf";
import { useState, useRef, useEffect } from "react";

interface UseFileUploadResult {
  isLoading: boolean;
  uploadStatus: "success" | "error";
  fileName: string | null;
  isToastVisible: boolean;
  isToastLeaving: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileUpload: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  triggerFileUpload: () => void;
}

export function useFileUpload(): UseFileUploadResult {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"success" | "error">(
    "error"
  );
  const [fileName, setFileName] = useState<string | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isToastLeaving, setIsToastLeaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    const response = await RegistPdf(file);
    setIsLoading(false);
    setUploadStatus(response.success ? "success" : "error");
    if (response.success) {
      setFileName(file.name);
    }

    setIsToastVisible(true);
    setIsToastLeaving(false);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastLeaving(true);
      }, 2700); // 2.7秒後にトーストの退出アニメーションを開始

      const hideTimer = setTimeout(() => {
        setIsToastVisible(false);
        setIsToastLeaving(false);
      }, 3000); // 3秒後にトーストを完全に非表示にする

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [isToastVisible]);

  return {
    isLoading,
    uploadStatus,
    fileName,
    isToastVisible,
    isToastLeaving,
    fileInputRef,
    handleFileUpload,
    triggerFileUpload,
  };
}
