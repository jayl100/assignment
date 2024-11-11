import {loggerReducer} from "../slices/loggerSlice.ts";
import {modalReducer} from "../slices/modalSlice.ts";
import {boardsReducer} from "../slices/boarderSlice.ts";
import {userReducer} from "../slices/userSlice.ts";

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer,
    user: userReducer
}

export default reducer;