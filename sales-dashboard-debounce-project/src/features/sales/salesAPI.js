import salesData
from "../../data/salesData";

export function fetchSalesAPI() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(salesData);

    }, 1000);

  });
}