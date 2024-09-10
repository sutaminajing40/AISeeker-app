import path from "path";
import os from "os";

export const PDF_SAVE_DIR = path.join(os.tmpdir(), "pdfs");
export const FAISS_INDEX_DIR = path.join(os.tmpdir(), "faiss");
export const PORT = 3000;
