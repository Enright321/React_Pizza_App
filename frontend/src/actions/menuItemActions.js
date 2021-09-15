import axios from 'axios';
import {
  MENUITEM_LIST_REQUEST,
  MENUITEM_LIST_SUCCESS,
  MENUITEM_LIST_FAIL,
  MENUITEM_DETAILS_REQUEST,
  MENUITEM_DETAILS_SUCCESS,
  MENUITEM_DETAILS_FAIL,
} from '../constants/menuItemConstants';

export const listMenuItems = () => async (dispatch) => {
  try {
    dispatch({ type: MENUITEM_LIST_REQUEST });
    const { data } = await axios.get('/api/menuItems');

    dispatch({
      type: MENUITEM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENUITEM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMenuItemDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENUITEM_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/menuItems/${id}`);

    dispatch({
      type: MENUITEM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENUITEM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
