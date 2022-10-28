type status = '/pending' | '/fulfilled' | '/rejected';

export const someNamesThunks = (arrayNamesThunks: any, status: status, action: string): boolean => {
  return arrayNamesThunks.some((nameAction: string) => (nameAction + status).toLowerCase() === action.toLowerCase());
}
