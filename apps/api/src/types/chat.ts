export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];

  model: string;

  planType: "personal" | "server";
  planId: string;

  stream?: boolean;
}

export interface ChatUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;

  okgTokenCost: number;
}

export interface ChatResponse {
  id: string;

  model: string;

  message: {
    role: "assistant";
    content: string;
  };

  usage: ChatUsage;
}
