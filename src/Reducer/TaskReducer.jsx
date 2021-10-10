export const initialState = {
  step: 1,
  data: {},
  file: {},
  mode: true,
  img: '',
};

export const PAGE_UP = 'page up';
export const PAGE_DOWN = 'page down';
export const PASS_VALID = 'pass validation';
export const IMG_LOAD = 'img load';
export const IMG_CHOOSE = 'img choose';
export const MODE_CHANGER = 'mode changer';

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
  case PAGE_UP:
    return {
      ...state,
      step: state.step + 1, 
      data: { ...state.data, ...action.payload }
    };
  case PAGE_DOWN:
    return { 
      ...state,
      step: state.step - 1,
    };
  case PASS_VALID:
    return {
      ...state,
      step: state.step + 1, 
      data: { ...state.data, ...action.payload },
    };
  case IMG_LOAD: 
    return {
      ...state,
      step: state.step + 1, 
      file: { ...state.file, ...action.payload },
    };
  case IMG_CHOOSE: 
    return {
      ...state,
      img: action.payload,
    };
  case MODE_CHANGER:
    return {
      ...state,
      mode: action.payload,
    };
  default: return state;
  }
};