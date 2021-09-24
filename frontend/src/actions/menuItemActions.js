import axios from 'axios';
import {
  MENUITEM_LIST_REQUEST,
  MENUITEM_LIST_SUCCESS,
  MENUITEM_LIST_FAIL,
  MENUITEM_DETAILS_REQUEST,
  MENUITEM_DETAILS_SUCCESS,
  MENUITEM_DETAILS_FAIL,
  MENUITEM_DELETE_REQUEST,
  MENUITEM_DELETE_SUCCESS,
  MENUITEM_DELETE_FAIL,
  MENUITEM_CREATE_REQUEST,
  MENUITEM_CREATE_FAIL,
  MENUITEM_CREATE_SUCCESS,
  MENUITEM_UPDATE_REQUEST,
  MENUITEM_UPDATE_FAIL,
  MENUITEM_UPDATE_SUCCESS,
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

export const deleteMenuItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MENUITEM_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/menuitems/${id}`, config);

    dispatch({
      type: MENUITEM_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: MENUITEM_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createMenuItem = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MENUITEM_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/menuitems`, {}, config);

    dispatch({
      type: MENUITEM_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENUITEM_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateMenuItem = (menuItem) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MENUITEM_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/menuitems/${menuItem._id}`,
      menuItem,
      config
    );

    dispatch({
      type: MENUITEM_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENUITEM_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
