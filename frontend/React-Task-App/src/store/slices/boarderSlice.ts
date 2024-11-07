import {createSlice} from '@reduxjs/toolkit'
import {IBoard} from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[]
}

const initialState : TBoardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: 'Board 1',
            lists: [
                {
                    listId: 'list-0',
                    listName: 'list 1',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'task 1',
                            taskDescription: 'task description',
                            taskOwner: 'hyeon'
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'task 2',
                            taskDescription: 'task description',
                            taskOwner: 'hyeon'
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'list 2',
                    tasks: [
                        {
                            taskId: 'task-3',
                            taskName: 'task 3',
                            taskDescription: 'task description',
                            taskOwner: 'hyeon'
                        }
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {}
})

export const boardsReducer = boardsSlice.reducer;