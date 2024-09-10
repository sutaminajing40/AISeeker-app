import { NextResponse, NextRequest } from "next/server";
import { QueryService } from "@/services/pdf/QueryService";
import { validateRequest } from "@/services/utils/validateRequest";
import { z } from "zod";

const querySchema = z.object({
  query: z.string().min(1, "クエリは必須です。"),
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    const validation = validateRequest({ query }, querySchema);
    const validatedQuery = validation.query;

    const queryService = new QueryService();
    const result = await queryService.sendQuery(validatedQuery);
    return NextResponse.json({ message: result }, { status: 200 });
  } catch (err) {
    console.error("Error in GET /api/query:", err);

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
