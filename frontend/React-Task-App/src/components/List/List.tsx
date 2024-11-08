import React, {FC} from 'react'
import {GrSubtract} from "react-icons/gr";
import Task from "../Task/Task.tsx";
import ActionButton from "../ActionButton/ActionButton.tsx";
import {IList, ITask} from "../../types";
import {useTypedDispatch} from "../../hooks/redux.ts";
import {deleteList, setModalActive} from "../../store/slices/boarderSlice.ts";
import {v4} from "uuid";
import {addLog} from "../../store/slices/loggerSlice.ts";
import {setModalData} from "../../store/slices/modalSlice.ts";
import {deleteButton, header, listWrapper, name} from "./List.css.ts";

type TListProps = {
  boardId: string;
  list: IList;
}

const List: FC<TListProps> = ({
  list,
  boardId
}) => {

  const dispatch = useTypedDispatch();

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({boardId, listId}));
    dispatch(
      addLog({
        logId: v4(),
        logMessage: `리스트 삭제하기: ${list.listName}`,
        logAuthor: 'User',
        logTimestamp: String(Date.now()),
      })
    )
  }

  const handleTaskChange = (
    boardId: string,
    listId: string,
    taskId: string,
    task: ITask,
  ) => {
    dispatch(setModalData({boardId, listId, task}));
    dispatch(setModalActive(true));
  }

  return (
    <div
    className={listWrapper}
    >
      <div className={header}>
        <div className={name}>
          {list.listName}
        </div>
        <GrSubtract
          className={deleteButton}
          onClick={() => handleListDelete(list.listId)}
        />
      </div>
      {list.tasks.map((task,
        index) => (
        <div
          onClick={() => handleTaskChange(boardId, list.listId, task.taskId, task)}
          key={task.taskId}
        >
          <Task
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            boardId={boardId}
            id={task.taskId}
            index={index}
          />
        </div>
      ))}
      <ActionButton/>

    </div>
  )
}

export default List
