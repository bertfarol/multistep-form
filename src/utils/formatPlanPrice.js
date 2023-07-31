
export function formatPlanPrice(data) {
  return `${data.price}/${data.type === "yearly" ? "yr" : "mo"}`;
}