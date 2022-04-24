//format string 123.456.789 to int 123456789
export function formatNumber(number) {
  return Number(number.toString().replace(/\D/g, ""));
}

//format string 123456789 to string 123.456.789
export function formatDisplayPrice(price) {
  let priceFormat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  let priceDisplay;
  if (priceFormat == "0") {
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
  return (phoneDisplay = "+84" + phoneFormat);
}

//format phone number "+84938033495" to 938033495
export function formatPhoneNumberDisplay(phone) {
  let phoneFormat = phone.toString().replace(/\D/g, "");
  let phoneDisplay;
  return (phoneDisplay = phoneFormat.substring(2));
}

//format phone number "+84938033495" to "+84 938033495"
export function formatPhoneNumberDisplay2(phone) {
  let phoneFormat = phone.toString().replace(/\D/g, "").substring(2);
  let phoneDisplay;
  return (phoneDisplay = "+84 " + phoneFormat);
}

//capitalize first letter of string
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//capslock string
export function capslock(string) {
  return string.toUpperCase();
}

//04-17-2022 09:00:43 => 17/04/2022 at 09:00
export function formatDate(date) {
  let dateFormat = date.toString().split(" ");
  let dateText = dateFormat[0].split("-");
  let timeText = dateFormat[1].split(":");
  let dateDisplay = dateText[1] + "/" + dateText[0] + "/" + dateText[2];
  let timeDisplay = timeText[0] + ":" + timeText[1];
  return dateDisplay + " at " + timeDisplay;
}

//04-17-2022 09:00:43 => 17/04/2022
export function formatJustDate(date) {
  let dateFormat = date.toString().split(" ");
  let dateText = dateFormat[0].split("-");
  let dateDisplay = dateText[1] + "/" + dateText[0] + "/" + dateText[2];
  return dateDisplay;
}
