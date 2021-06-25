import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';
import productReducer from './product'

// Store tong ung dung
export const rootReducer = combineReducers({
	// Noi se chua cac reducer cho nghiep vu (store con)
	GioHangReducer,
	productReducer,
})