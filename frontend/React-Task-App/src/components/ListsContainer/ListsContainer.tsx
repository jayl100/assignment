import React, {FC} from 'react'
import {IList} from "../../types";
import List from "../List/List.tsx";
import ActionButton from "../ActionButton/ActionButton.tsx";
import {listsContainer} from "./ListsContainer.css.ts";

type TListsContainerProps = {
  boardId: string;
  lists: IList[];
}

const ListsContainer: FC<TListsContainerProps> = ({
  lists,
  boardId
}) => {
  
  return (
    <div className={listsContainer}>
      {
        lists.map(list => (
          <List
            key={list.listId}
            list={list}
            boardId={boardId}/>
        ))
      }
      <ActionButton />
    </div>
  )
};

export default ListsContainer
