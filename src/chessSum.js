export function sumRecordValues(obj) {
  let sum = 0;

  function iterate(obj) {
    if (typeof obj === "object" && "record" in obj) {
      for (let key in obj["record"]) {
        if (key === "win" || key === "loss" || key === "draw") {
          sum += obj["record"][key];
        }
      }
    } else {
      for (let key in obj) {
        iterate(obj[key]);
      }
    }
  }
  iterate(obj);
  return sum;
}