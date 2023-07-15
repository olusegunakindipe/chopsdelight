export const isNullOrEmptyObject = (
  obj: Record<string, any> | null | undefined
): boolean => {
  if (obj === null || obj === undefined) {
    return true;
  }
  return Object.keys(obj).length === 0;
};

export const isNullOrEmptyArray = (arr: any[] | null | undefined): boolean => {
  if (arr === null || arr === undefined) {
    return true; // Array is null or undefined
  }

  return !Array.isArray(arr) || arr.length === 0;
};
