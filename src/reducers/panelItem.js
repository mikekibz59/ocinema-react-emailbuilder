// @flow
const initialState = {
  id: 999,
  layout: "",
  content: "",
  htmldescription: "",
  htmlquotes: "",
  posterurl: "",
  hascta: true,
  ctaurl: "",
  ctalabel: "",
  bannerurl: ""
};

export default function panelItem(
  state: NewsletterLayoutItemType = initialState,
  action: Action
) {
  switch (action.type) {
    case "EDIT_LAYOUT_ITEM":
      return action.payload.item;

    case "UPDATE_PANEL_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    default:
      return state;
  }
}
