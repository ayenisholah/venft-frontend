import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'
export interface BlockchainAuthState {
    account: string | null | undefined
}

const initialBlockchainAuthState: BlockchainAuthState = {
    account: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialBlockchainAuthState,

    reducers: {
        activate: (state, action: PayloadAction<string>) => {
            state.account = action.payload
        },

        deactivate: (state) => {
            state.account = null
        }
    }
})

export const { activate, deactivate } = authSlice.actions

export const selectAccount = (state: AppState) => state.auth.account

export default authSlice.reducer