import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer';
import productReducer from './product'
import listCategory from './category'
import chairReducer from './chairReducer'
import glassesReducer from './glassesReducer'

// Store tong ung dung
export const rootReducer = combineReducers({
	// Noi se chua cac reducer cho nghiep vu (store con)
	GioHangReducer,
	productReducer,
	listCategory,
	chairReducer,
	glassesReducer,
})