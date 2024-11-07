import {loggerReducer} from "../slices/loggerSlice.ts";
import {modalReducer} from "../slices/modalSlice.ts";
import {boardsReducer} from "../slices/boarderSlice.ts";

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer
}

export default reducer;