import { useState, useEffect } from "react";

export function useFormatAmount() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  function formatAmount(n) {
    if (n === "" || n === null || n === undefined) return "";
    const num = typeof n === "number" ? n : Number(n);
    if (Number.isNaN(num)) return "";
    if (!ready) return String(num); 
    return new Intl.NumberFormat("az-AZ", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }

  return formatAmount;
}
