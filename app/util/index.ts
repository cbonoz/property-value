export const formatNumberWithCommas = (num: number | string) => {
  const numString = parseFloat(num + "").toFixed(2)
  return numString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
