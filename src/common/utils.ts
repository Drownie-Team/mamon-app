export function formatToCurrency(amount: any, currencySymbol: any, rate: number = 1) {
  let calculatedAmount: any = amount * rate;

  return (
    currencySymbol + ' ' +
    parseFloat(calculatedAmount)
      .toFixed(0) // Round the number if necessary
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );
}
