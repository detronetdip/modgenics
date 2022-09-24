import { atom } from "recoil";
const textState = atom({
  key: "textState", 
  default: {
    selected: 0,
  },
});
export { textState };
