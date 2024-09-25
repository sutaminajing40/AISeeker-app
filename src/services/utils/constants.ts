import path from "path";
import os from "os";

const isVercel = process.env.VERCEL === "1";

// ChatFooterコンポーネントの入力欄と送信ボタンのデフォルト文字列
export const PLACEHOLDER_WITH_PDFS = "検索したい内容を入力してください";
export const PLACEHOLDER_WITHOUT_PDFS = "PDFを先にアップロードしてください";
export const SEND_BUTTON_TEXT = "送信";

export const PDF_SAVE_DIR = isVercel
  ? path.join(os.tmpdir(), "pdfs")
  : path.join(process.cwd(), "data", "pdfs");

export const FAISS_INDEX_DIR = isVercel
  ? path.join(os.tmpdir(), "faiss")
  : path.join(process.cwd(), "data", "faiss");

export const PORT = 3000;
