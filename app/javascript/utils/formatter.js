export function round(num, decimals) {
  if (decimals == undefined) {
    return Math.round(num * 100) / 100;    
  } else {
    return Number(Math.round(num+'e'+decimals)+'e-'+decimals);
  }
}