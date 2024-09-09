import { NextResponse, NextRequest } from "next/server";
import { PdfService } from "@/services/pdf/PdfService";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // binaryリクエストからPDFファイルを取得し、Node.jsで扱えるBufferに変換
    const blob = await req.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // クエリパラメータからファイル名の取得
    const fileName = req.nextUrl.searchParams.get("fileName");
    if (!fileName) {
      throw new Error("ファイル名が指定されていません。");
    }

    const pdfService = new PdfService();

    const pdfSavePath = pdfService.savePdf(fileName, buffer);
    await pdfService.processPdf(pdfSavePath);
    return NextResponse.json(
      { message: "PDFの登録が完了しました" },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Error in POST /api/pdf:", err);
    return NextResponse.json({ message: err }, { status: 500 });
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
