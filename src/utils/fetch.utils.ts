import { toast } from "react-toastify";

import { fetchDataType } from "@/types/api-response.type";

export async function fetchWithToast<T>(
  input: RequestInfo | URL,
  init: RequestInit = {},
  successMessage?: string,
): Promise<fetchDataType<T>> {
  const response = await fetch(input, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  const data = await response.json();

  if (!response.ok) {
    let message: string = "یه چی شد ولی نمیدونم چی.";

    if ("error" in data) {
      message = data.error;
    }

    toast.error(message);

    return { error: message };
  }

  if (successMessage) {
    toast.success(successMessage);
  }

  return { data };
}
