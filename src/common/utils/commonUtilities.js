/**
 * return reverse sort item based on key
 * @param a
 * @param b
 * @param key
 * @returns {number}
 */

export const reverse_sort   = (a, b, key) => {
  // a should come before b in the sorted order
  if(a[key] > b[key]){
    return -1;
    // a should come after b in the sorted order
  }else if(a[key] < b[key]){
    return 1;
    // and and b are the same
  }else{
    return 0;
  }
}