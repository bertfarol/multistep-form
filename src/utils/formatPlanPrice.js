
//good naming convention. specifies the use of the function
export function formatPlanPrice(data) {
  return `${data.price}/${data.type === "yearly" ? "yr" : "mo"}`;
}