  
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';

export function createNewList(valor) {
  return {
    type: CREATE_NEW_LIST,
    payload: valor
  }
}