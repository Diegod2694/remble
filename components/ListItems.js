import React from "react"
import { Entypo } from "@expo/vector-icons"
import { SwipeListView } from "react-native-swipe-list-view"

//styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  colors,
} from "../styles/appStyles";

const ListItems = ({todos, setTodos}) => {
  return (
    <SwipeListView
      data={todos}
      renderItem={({item: { title, date }}) => {
        return (
          <ListView>
            <>
              <TodoText>{title}</TodoText>
              <TodoDate>{date}</TodoDate>
            </>
          </ListView>
        )
      }}
      renderHiddenItem={() => {
        <ListViewHidden>
          <HiddenButton>
          <Entypo name="trash" size={25} color={colors.secondary} />
          </HiddenButton>
        </ListViewHidden>
      }}
      leftOpenValue={80}
      previewRowKey="1"
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe
      showsHorizontalScrollIndicator={false}
      style={{
        flex: 1, paddingBottom: 30, marginBottom: 40
      }}
    />
  );
}

export default ListItems;