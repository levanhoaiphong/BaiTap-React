// Khoi tao gia tri ban dau cua store
const stateGioHang = {
  mangGioHang: [
    {
      id: "sp_1",
      name: "iphoneX",
      price: "30000",
      screen: "screen_1",
      backCamera: "backCamera_1",
      frontCamera: "frontCamera_1",
      quantity:1,
      img:
        "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
      desc:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
  ],
};

export const GioHangReducer = (state = stateGioHang,action)=>{
  switch(action.type){
    case 'ADD_CARTS':{ 
      let cloneCarts = [...state.mangGioHang];
     let index =  cloneCarts.findIndex(spGH=>spGH.id === action.productCart.id);
      if(index !==-1){
        cloneCarts[index].quantity += 1;
      }else{
        cloneCarts.push(action.productCart)
      }
      state.mangGioHang = cloneCarts;
       console.log(action)
      return { ...state }
  }
  case 'DELETE_CARTS':{ 
    const cloneCarts = [...state.mangGioHang]
    cloneCarts.splice(action.index, 1);
    state.mangGioHang = cloneCarts;
    return {...state}
  }
  case 'TANG_GIAM_SL':{
    const {index,tangGiam} = action
    console.log(action)
    const cloneCart = [...state.mangGioHang]
    if(tangGiam){
      cloneCart[index].quantity += 1
    }else{
      if(cloneCart[index].quantity > 1){
        cloneCart[index].quantity -= 1
      }
    }
    state.mangGioHang = cloneCart
    return {...state}
  }
}
return {...state}
}
