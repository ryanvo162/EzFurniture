//format string 123.456.789 to int 123456789
export function formatNumber(number) {
  // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return Number(number.toString().replace(/\D/g, ""));
}

export function formatDisplayPrice(price) {
    let priceFormat= price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return priceFormat+= " đ";
}
