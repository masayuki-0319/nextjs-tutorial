import { atom } from 'recoil';

const initialState: { text: null | string } = {
  text: null,
};

export const inputState = atom({
  key: 'input',
  default: initialState,
});
