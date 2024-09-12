import path from "path";
import os from "os";

const isVercel = process.env.VERCEL === "1";

export const PDF_SAVE_DIR = isVercel
  ? path.join(os.tmpdir(), "pdfs")
  : path.join(process.cwd(), "data", "pdfs");

export const FAISS_INDEX_DIR = isVercel
  ? path.join(os.tmpdir(), "faiss")
  : path.join(process.cwd(), "data", "faiss");

export const PORT = 3000;
