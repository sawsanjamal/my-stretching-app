function getExpiration(tier) {
  const today = new Date();
  switch (tier) {
    case "free":
      return null;
    case "month":
      today.setMonth(today.getMonth() + 1);
      return today.toISOString();
    case "year":
      today.setFullYear(today.getFullYear() + 1);
      return today.toISOString();
    default:
      break;
  }
}
module.exports = { getExpiration };
