import { NextResponse } from "next/server";
import { QueryService } from "@/services/pdf/QueryService";

export async function POST(req: Request) {
  const body = await req.json();
  const query = body.query;

  if (!query) {
    return NextResponse.json(
      { message: "クエリがありません。" },
      { status: 400 }
    );
  }

  const queryService = new QueryService();
  try {
    const result = await queryService.sendQuery(query);
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("Query Error:", err);
    return NextResponse.json(
      { message: "クエリの処理に失敗しました。" },
      { status: 500 }
    );
  }
}
