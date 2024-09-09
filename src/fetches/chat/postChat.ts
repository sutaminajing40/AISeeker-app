export const postChat = async (inputMessage: string) => {
  try {
    const response = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: inputMessage }),
    });
    if (!response) {
      return Response.json({ message: "結果が返されませんでした" });
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ message: "エラーが発生しました" });
  }
};
