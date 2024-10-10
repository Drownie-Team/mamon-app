export function formatToCurrency(amount: any, currencySymbol: any) {
  return (
    currencySymbol +
    parseFloat(amount)
      .toFixed(0) // Round the number if necessary
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );
}
