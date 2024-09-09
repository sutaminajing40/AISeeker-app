import { NextResponse, NextRequest } from "next/server";
import { QueryService } from "@/services/pdf/QueryService";
import { validateRequest } from "@/services/utils/validateRequest";
import { z } from "zod";

const querySchema = z.object({
  query: z.string().min(1, "クエリは必須です。"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateRequest(body, querySchema);
    const query = validation.query;

    const queryService = new QueryService();
    const result = await queryService.sendQuery(query);
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("Error in POST /api/query:", err);

    if (err instanceof Error) {
      // バリデーションエラーを含む一般的なエラー処理
      return NextResponse.json({ message: err.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
