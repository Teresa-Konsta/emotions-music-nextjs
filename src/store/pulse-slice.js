import { createSlice } from "@reduxjs/toolkit";

const pulseSlice = createSlice({
    name: 'pulse',
    initialState: {
        pulseInput1: null,
        pulseInput2: null,
        pulseInput3: null
    },
    reducers: {
        setPulseInputs(state, action) {
            state.pulseInput1 = action.payload.pulseInput1;
            state.pulseInput2 = action.payload.pulseInput2;
            state.pulseInput3 = action.payload.pulseInput3;            
        },
        setDefault(state, action) {
            state.pulseInput1 = null;
            state.pulseInput2 = null;
            state.pulseInput3 = null;
        }
    }
});

export const pulseActions = pulseSlice.actions;
export default pulseSlice;