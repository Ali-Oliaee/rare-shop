import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { AdminApi } from "../../api/AdminApi";

const fetchCategoryName = createAsyncThunk('getCategory', async (thunkAPI) => {
  // const response = await AdminApi.getCategoryId();
  // return response.data;
})

const fetchSubCategoryName = createAsyncThunk(
  'getSubCategory',
  async (thunkAPI) => {
    // const response = await AdminApi.getSubCategoryId();
    // return response.data;
  },
)
const initialState = {
  category: [],
  subCategory: [],
}
export const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategoryName:
         (fetchCategoryName.fulfilled,
         (state, action) => {
           state.category.push(action.payload)
         }),
    getSubCategoryName:
         (fetchSubCategoryName.fulfilled,
         (state, action) => {
           state.subCategory.push(action.payload)
         }),
  },
})
export const { getCategoryName, getSubCategoryName } = CategorySlice.actions
export default CategorySlice.reducer
