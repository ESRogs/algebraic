import Decimal from 'decimal.js';

const DPS_FOR_TOKENS = {
  BTC: 8,
  ETH: 18,
  SOL: 9,
  USD: 2,
};

type TokenCode = keyof (typeof DPS_FOR_TOKENS);

// type Decimal.Value = string | number | Decimal;

function toTokenDecimalPlaces(
  value: Decimal.Value,
  tokenCode: TokenCode,
): Decimal {
  const numDecimalPlaces = DPS_FOR_TOKENS[tokenCode];
  return new Decimal(value).toDP(numDecimalPlaces);
}

function roundAndPrint(
  value: Decimal.Value,
  tokenCode: TokenCode,
) {
  console.log({
    value,
    tokenCode,
    rounded: toTokenDecimalPlaces(value, tokenCode),
  });
}

function main() {
  roundAndPrint(0.123456789, 'BTC');
  roundAndPrint('3.141592653589793238462643383279', 'ETH');
  roundAndPrint(Decimal.exp(1), 'USD');
}

main()
