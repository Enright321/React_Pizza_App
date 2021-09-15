import {
  MENUITEM_LIST_REQUEST,
  MENUITEM_LIST_SUCCESS,
  MENUITEM_LIST_FAIL,
  MENUITEM_DETAILS_REQUEST,
  MENUITEM_DETAILS_SUCCESS,
  MENUITEM_DETAILS_FAIL,
} from '../constants/menuItemConstants';

export const menuItemListReducer = (state = { menuItems: [] }, action) => {
  switch (action.type) {
    case MENUITEM_LIST_REQUEST:
      return { loading: true, menuItems: [] };
    case MENUITEM_LIST_SUCCESS:
      return { loading: false, menuItems: action.payload };
    case MENUITEM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuItemDetailsReducer = (state = { menuItem: {} }, action) => {
  switch (action.type) {
    case MENUITEM_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MENUITEM_DETAILS_SUCCESS:
      return { loading: false, menuItem: action.payload };
    case MENUITEM_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
