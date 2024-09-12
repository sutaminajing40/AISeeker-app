import React from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";

interface UploadButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export function UploadButton({ isLoading, onClick }: UploadButtonProps) {
  return (
    <Button variant="outline" size="sm" onClick={onClick} disabled={isLoading}>
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Upload className="mr-2 h-4 w-4" />
      )}
      {isLoading ? "アップロード中..." : "PDFをアップロード"}
    </Button>
  );
}
