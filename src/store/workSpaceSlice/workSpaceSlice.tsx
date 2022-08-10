import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { v4 as uuidv4 } from 'uuid';

import { Block } from '../../interfaces/Block';

type BlocksState = {
    blocks: Block[]
}

const initialState: BlocksState = {
    blocks: []
}

export const workSpaceSlice = createSlice({
    name: 'workSpace',
    initialState,
    reducers: {
        addBlockToWorkSpace(state, action: PayloadAction<Block>) {

            let newState = state.blocks;
            newState.push(action.payload);
            state.blocks = newState;
        },
        updateValueInBlock(state, action: PayloadAction<{ id: string, value: string }>) {

            let newState = state.blocks;
            newState.map((block) => {
                if (block.id === action.payload.id) {
                    block.value = action.payload.value;
                }
            })
            state.blocks = newState;
        },
        updateActiveBlock(state, action: PayloadAction<string>) {

            let newState = state.blocks;
            newState.map((block) => {
                if (block.id === action.payload) {
                    block.active = !block.active;
                }
            })
            state.blocks = newState;
        },
        removeBlock(state, action: PayloadAction<string>) {

            let newState = state.blocks;
            newState = newState.filter((block) => block.id !== action.payload);
            state.blocks = newState;

        },
        cloneBlock(state, action: PayloadAction<string>) {

            let newState = state.blocks;

            let blockIndex: number = 0;
            let cloneBlock: Block = { type: '', value: '', id: '', active: true };

            newState.map((block) => {
                if (block.id === action.payload) {

                    blockIndex = newState.indexOf(block);
                    cloneBlock = block;
                }
            })
            newState.splice(blockIndex, 0, { ...cloneBlock, id: uuidv4() });

        },
        moveBlockUp(state, action: PayloadAction<string>) {

            let newState = state.blocks;
            let blockIndex: number = 0;

            newState.map((block) => {
                if (block.id === action.payload) {
                    blockIndex = newState.indexOf(block);
                }
            })
            if (blockIndex) {
                [newState[blockIndex], newState[blockIndex - 1]] = [newState[blockIndex - 1], newState[blockIndex]];
            }
        },
        moveBlockDown(state, action: PayloadAction<string>) {

            let newState = state.blocks;
            let blockIndex: number = 0;

            newState.map((block) => {
                if (block.id === action.payload) {
                    blockIndex = newState.indexOf(block);
                }
            })
            if (blockIndex < newState.length - 1) {
                [newState[blockIndex], newState[blockIndex + 1]] = [newState[blockIndex + 1], newState[blockIndex]];
            }
        }
    },
    extraReducers: {}
},
)

export const {

    addBlockToWorkSpace,
    updateValueInBlock,
    updateActiveBlock,
    removeBlock,
    cloneBlock,
    moveBlockUp,
    moveBlockDown

} = workSpaceSlice.actions;

export const selectItem = (state: RootState) => state.workSpace;

export default workSpaceSlice.reducer;