// @flow
export const createLayoutItem = (
  meta: ?NewsletterLayoutItemTypeV2 = null
): ActionCreateLayoutItem => {
  const ts = new Date().getTime();
  const objItem = meta
    ? meta
    : {
        id: ts,
        layout: "column-1",
        content: "",
        contents: [],
        elements: [],
        htmldescription: "",
        htmlquotes: "",
        posterurl: "",
        bannerurl: "",
      };
  return {
    type: "CREATE_LAYOUT_ITEM",
    payload: objItem,
  };
};

// parameter 1: source object
// parameter 2: target object
export const dropElementIntoColumnElement = (
  source: ColumnElementType,
  target: ColumnElementType
) => {
  return {
    type: "DROP_ELEMENT_INTO_COLUMN_ELEMENT",
    payload: {
      source: source,
      target: target,
    },
  };
};

// parameter 1: source object
// parameter 2: target column id
export const dropElementIntoColumnContent = (
  item: ColumnElementType,
  columnId: number
) => {
  return {
    type: "DROP_ELEMENT_INTO_COLUMN_CONTENT",
    payload: {
      item: item,
      columnId: columnId,
    },
  };
};

/**
 * if index is -1 then append at the end of the array
 */
export const dropDraggedButtonIntoColumnContent = (
  columnId: number,
  index: number = -1
): ActionDropDraggedButtonIntoColumn => {
  return {
    type: "DROP_DRAGGED_BUTTON_INTO_COLUMN_CONTENT",
    payload: {
      columnId: columnId,
      index: index,
      buttonType: "text",
    },
  };
};

export const deleteLayoutItem = (key: number): ActionDeleteLayoutItem => {
  return {
    type: "DELETE_LAYOUT_ITEM",
    key: key,
  };
};

export const editLayoutItem = (key: number): ThunkAction => {
  return (dispatch: any, getState: any): void => {
    const state = getState();
    dispatch({
      type: "EDIT_LAYOUT_ITEM",
      payload: {
        index: key,
        item: state.layout[key],
      },
    });
  };
};

export const moveLayoutItem = (key: number, newIndex: number): ActionMoveLayoutItem => {
  return {
    type: "MOVE_LAYOUT_ITEM",
    key: key,
    newIndex: newIndex,
  };
};

export const editPanelField = (
  event: SyntheticInputEvent<>,
  name: string
): ThunkAction => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: "UPDATE_PANEL_FIELD",
      payload: {
        name: name,
        index: state.panelIndex,
        value: event.target.value,
      },
    });
  };
};

export const editPanelQuill = (
  newValue: string,
  source: string,
  field: string = "htmldescription"
): ThunkAction => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: "UPDATE_PANEL_FIELD",
      payload: {
        name: field,
        index: state.panelIndex,
        value: newValue,
      },
    });
  };
};

export const exportAsHTML = (): ActionExportHTML => {
  return {type: "EXPORT_HTML"};
};

export const hidePanel = (): ActionHidePanel => {
  return {type: "HIDE_PANEL"};
};
