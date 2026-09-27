export interface RouterRequest {
  selectedModelId: string;
  planId: string;
  planType: "personal" | "server";
}

export interface RouterResult {
  selectedModelId: string;
  omniRouteModel: string;
  tokenCost: number;
}

export class SmartModelRouter {
  resolve(_request: RouterRequest): RouterResult {
    throw new Error("Model catalog has not been configured yet.");
  }
}