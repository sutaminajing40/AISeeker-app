import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import clsx from "clsx";

interface ToastNotificationProps {
  uploadStatus: "success" | "error";
  fileName: string | null;
  isLeaving: boolean;
}

const toastClasses = {
  base: "fixed bottom-4 right-4 rounded-md p-4 shadow-lg transition-all duration-300 ease-in-out",
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  visible: "translate-x-0 opacity-100",
  hidden: "translate-x-full opacity-0",
};

type ToastConfigType = {
  [key in "success" | "error"]: {
    icon: JSX.Element;
    title: string;
    message: (fileName?: string) => string;
  };
};

const toastConfig: ToastConfigType = {
  success: {
    icon: <CheckCircle className="mr-2 h-5 w-5 text-green-500" />,
    title: "アップロード成功",
    message: (fileName = "") => `ファイル名: ${fileName}`,
  },
  error: {
    icon: <XCircle className="mr-2 h-5 w-5 text-red-500" />,
    title: "アップロード失敗",
    message: () => "PDFのアップロードに失敗しました。もう一度お試しください。",
  },
};

export function ToastNotification({
  uploadStatus,
  fileName,
  isLeaving,
}: ToastNotificationProps) {
  const config = toastConfig[uploadStatus];

  return (
    <div
      className={clsx(
        toastClasses.base,
        uploadStatus === "success" ? toastClasses.success : toastClasses.error,
        isLeaving ? toastClasses.hidden : toastClasses.visible
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center">
        {config.icon}
        <div>
          <h2 className="font-semibold">{config.title}</h2>
          <p className="text-sm">{config.message(fileName || undefined)}</p>
        </div>
      </div>
    </div>
  );
}
