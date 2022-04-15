//format string 123.456.789 to int 123456789
export function formatNumber(number) {
  // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return Number(number.toString().replace(/\D/g, ""));
}

export function formatDisplayPrice(price) {
  let priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let priceDisplay;
  if (priceFormat=="0") {
    priceDisplay = "FREE";
  } else {
    priceDisplay = "$" + priceFormat;
  }
  return priceDisplay;
}

//format phone number 938033495 to "+84 938033495"
export function formatPhoneNumber(phone) {
  let phoneFormat = phone.toString().replace(/\D/g, "");
  let phoneDisplay;
  return phoneDisplay = "+84" + phoneFormat;
}

//capitalize first letter of string
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
