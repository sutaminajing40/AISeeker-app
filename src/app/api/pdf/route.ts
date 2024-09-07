import { NextResponse } from "next/server";
import { PdfService } from "@/services/pdf/PdfService";
import fs from "fs";

export async function POST(req: Request): Promise<NextResponse> {
  const formData = await req.formData();
  const pdfFile = formData.get("pdf") as File | null;

  if (!pdfFile) {
    return NextResponse.json(
      { message: "PDFファイルがありません。" },
      { status: 400 }
    );
  }

  if (pdfFile.type !== "application/pdf") {
    return NextResponse.json(
      {
        message:
          "不正なコンテンツタイプです。application/pdfである必要があります。",
      },
      { status: 400 }
    );
  }

  const fileName = pdfFile.name;
  const pdfFileData = await pdfFile.arrayBuffer();
  const pdfService = new PdfService();

  try {
    const pdfSavePath = pdfService.savePdf(fileName, Buffer.from(pdfFileData));
    try {
      await pdfService.processPdf(pdfSavePath);
      return NextResponse.json(
        { message: "PDFの登録が完了しました" },
        { status: 200 }
      );
    } catch (processErr) {
      // 処理中にエラーが発生した場合、保存したPDFファイルを削除する
      fs.unlinkSync(pdfSavePath);
      return NextResponse.json(
        { message: "PDFの処理に失敗しました。" },
        { status: 500 }
      );
    }
  } catch (saveErr) {
    return NextResponse.json(
      { message: "このPDFはすでに登録されています。" },
      { status: 409 }
    );
  }
}

export async function DELETE() {
  try {
    const pdfService = new PdfService();
    await pdfService.deletePdf();
    return NextResponse.json(
      { message: "PDFの削除が完了しました。" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Delete Error:", err);
    return NextResponse.json(
      { message: "PDFの削除に失敗しました。" },
      { status: 500 }
    );
  }
}
