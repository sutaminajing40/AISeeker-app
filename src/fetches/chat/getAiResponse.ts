export const getAiResponse = async (inputMessage: string) => {
  try {
    const url = new URL("/api/query", window.location.origin);
    url.searchParams.append("q", encodeURIComponent(inputMessage));

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("APIレスポンスが正常ではありません");
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    return { message: "エラーが発生しました" };
  }
};
