const stateCategory = {
  categoryList: [
    { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
    { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
    { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
    { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
    { tabName: "tabNecklaces", showName: "Dây chuyền", type: "necklaces" },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
    { tabName: "tabBackground", showName: "Nền", type: "background" },
  ],
  selectedCategory: "topclothes",
};
const categoryReducer = (state = stateCategory, action) => {
  console.log(action)
  switch (action.type) {
    case "SELECTE_CATEGORY": {
      state.selectedCategory = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
export default categoryReducer;
