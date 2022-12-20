import { sumRecordValues } from "./chessSum";

export const playerTotals = (stats) => {
  if(stats.service === "Lichess") {
    return stats.data.count?.all  
  } else {
    return sumRecordValues(stats.data);
  }
}