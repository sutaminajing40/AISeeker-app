import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import clsx from "clsx";

interface ToastNotificationProps {
  isSuccess: boolean;
  title: string;
  message: string;
  isLeaving: boolean;
}

const toastClasses = {
  base: "fixed bottom-4 right-4 rounded-md p-4 shadow-lg transition-all duration-300 ease-in-out",
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  visible: "translate-x-0 opacity-100",
  hidden: "translate-x-full opacity-0",
};

const icons = {
  success: <CheckCircle className="mr-2 h-5 w-5 text-green-500" />,
  error: <XCircle className="mr-2 h-5 w-5 text-red-500" />,
};

export function ToastNotification({
  isSuccess,
  title,
  message,
  isLeaving,
}: ToastNotificationProps) {
  return (
    <div
      className={clsx(
        toastClasses.base,
        isSuccess ? toastClasses.success : toastClasses.error,
        isLeaving ? toastClasses.hidden : toastClasses.visible
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center">
        {icons[isSuccess ? "success" : "error"]}
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
