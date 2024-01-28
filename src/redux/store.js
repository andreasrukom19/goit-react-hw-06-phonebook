import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./reducer";

// const initialAState = {
//   contacts: [
//     { id: 1, name: 'Andrew12', phone: '234-45-12' },
//     {id: 2, name: 'Joe', phone: '123-54-54'}
//   ],
//   filter: '',
// }

const rootReducer = combineReducers({
  contactsGroup: contactsReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);