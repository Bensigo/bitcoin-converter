
export const exchangeBtcToUsd = (rate, amount) => {
  const result = rate * parseFloat(amount)/1
  return result.toString()
}

export const exchangeUsdToBtc = (rate, amount) => {
  const result = parseFloat(amount) * 1/rate
  return result.toString()
}