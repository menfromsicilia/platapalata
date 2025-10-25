const formatPrice = (price, currency = "RUB") => {
  if (currency === "RUB") {
    return `${price.toLocaleString("ru-RU")}\u20BD`;
  }
  return `${price.toLocaleString("ru-RU")} ${currency}`;
};
const formatBlogDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export { formatPrice as a, formatBlogDate as f, truncateText as t };
//# sourceMappingURL=formatters-CIT9DWcj.mjs.map
