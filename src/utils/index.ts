export const priceFormater = (price: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace('Rp', 'Rp.');

export const discontFormater = (price: number, percentage: number) =>
  price - (price * percentage) / 100;
