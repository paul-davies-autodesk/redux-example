export const UPDATE_NEW_ITEM = '[Item] Update';
// unique identifier, string for human consumption
export const CREATE_ITEM = '[Items] Create';


export function updateNewItem(newItemValue) {
  return {
      type: UPDATE_NEW_ITEM,
      payload: newItemValue
  }
}

export function createItem() {
    return {
        type: CREATE_ITEM
    }
}