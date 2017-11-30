//convert bitcoin to usd/ngn
export const convert = (currency, amount) => {
  if (currency === 'USD') {
    return converterBtcToUsd(amount)
  }
  return convertBtcToNgn(amount)
} 

export const convertBtcToNgn = (btc) => {
  const ngn = parseFloat(localStorage.getItem('BTC_USD')) * 360
  const value = ngn * btc / 1
  return value.toString()
}

export  const converterBtcToUsd = (btc) => {
    const usd = localStorage.getItem('BTC_USD')
    const value = parseFloat(usd) * btc / 1
    return value.toString()
}

export const convertUsdToBtc = (amount) => {
  const usd = localStorage.getItem('BTC_USD')
  const value = amount * 1/parseFloat(usd)
  return value.toString()
} 