export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  cachedTokens?: number;
  reasoningTokens?: number;
}

export interface TokenCostResult {
  inputTokens: number;
  outputTokens: number;
  cachedTokens: number;
  reasoningTokens: number;
  totalTokens: number;

  tokenCostPerThousand: number;
  chargedTokens: number;
  okgTokenCost: number;
}

export function calculateTokenCost(
  usage: TokenUsage,
  tokenCostPerThousand: number
): TokenCostResult {
  const inputTokens = Math.max(0, usage.inputTokens);
  const outputTokens = Math.max(0, usage.outputTokens);
  const cachedTokens = Math.max(0, usage.cachedTokens ?? 0);
  const reasoningTokens = Math.max(
    0,
    usage.reasoningTokens ?? 0
  );

  const totalTokens =
    inputTokens +
    outputTokens +
    cachedTokens +
    reasoningTokens;

  const chargedTokens = Math.ceil(totalTokens);

  const okgTokenCost = Math.ceil(
    (chargedTokens / 1000) *
      tokenCostPerThousand
  );

  return {
    inputTokens,
    outputTokens,
    cachedTokens,
    reasoningTokens,
    totalTokens,

    tokenCostPerThousand,
    chargedTokens,
    okgTokenCost
  };
}
