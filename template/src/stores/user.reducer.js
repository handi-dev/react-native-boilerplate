import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { getUser } from '../api/fakeApiUser'

export const fetchUser = createAsyncThunk('user/getUser', async () => {
  const response = await getUser()
  return response.data
})

const userAdapter = createEntityAdapter()

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    isLoading: false
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        userAdapter.setAll(state, action.payload)
        state.isLoading = false
      })
      .addCase(fetchUser.rejected, state => {
        state.isLoading = false
      })
  }
})

export const { selectAll } = userAdapter.getSelectors(state => state.members)

export default userSlice.reducer
