import React, { useState } from "react"
import { CheckBox } from 'react-native-elements'
import { Entypo } from "@expo/vector-icons"
import { SwipeListView } from "react-native-swipe-list-view"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

//styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  SwipedTodoText,
  HiddenButton,
  ListViewContainer,
  CheckboxContainer,
  colors,
} from "../styles/appStyles";

const ListItems = ({todos, setTodos, handleTriggerEdit, handleCheckTodo}) => {
  if (todos.length === 0) {
    return (
      <TodoText>
        Empty
      </TodoText>
    )
  }

  const renderItem = ({ item, drag, isActive }) => {
    const RowText = item.isDone ? SwipedTodoText : TodoText;
    return (
      <ScaleDecorator>
        <ListViewContainer>
          <CheckboxContainer>
            <CheckBox
              center
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={item.isDone}
              onPress={() => handleCheckTodo(item)}
            />
          </CheckboxContainer>
          <ListView
            underlayColor={colors.primary}
            onPress={() => {
              handleTriggerEdit(item)
            }}
            onLongPress={drag}
            disabled={isActive}
            isActive={isActive}
          >
            <>
              <RowText>{item.title}</RowText>
              <TodoDate>{item.date}</TodoDate>
            </>
          </ListView>
        </ListViewContainer>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      data={todos}
      onDragEnd={({ data }) => setTodos(data)}
      keyExtractor={(item) => item.key}
      renderItem={renderItem}
    />
  )

  // return (
  //   <SwipeListView
  //     data={todos}
  //     renderItem={({item}) => {
  //       const RowText = item.isDone ? SwipedTodoText : TodoText;
  //       return (
  //         <ListViewContainer>
  //           <CheckboxContainer>
  //             <CheckBox
  //               center
  //               checkedIcon='dot-circle-o'
  //               uncheckedIcon='circle-o'
  //               checked={item.isDone}
  //               onPress={() => handleCheckTodo(item)}
  //             />
  //           </CheckboxContainer>
  //           <ListView
  //             underlayColor={colors.primary}
  //             onPress={() => {
  //               handleTriggerEdit(item)
  //             }}
  //           >
  //             <>
  //               <RowText>{item.title}</RowText>
  //               <TodoDate>{item.date}</TodoDate>
  //             </>
  //           </ListView>
  //         </ListViewContainer>
  //       )
  //     }}
  //     renderHiddenItem={({item: { key }}, rowMap) => {
  //       return (
  //         <ListViewHidden>
  //           <HiddenButton
  //             onPress={() => handleDeleteTodo(rowMap, key)}
  //           >
  //             <Entypo name="trash" size={25} color={colors.primary} />
  //           </HiddenButton>
  //         </ListViewHidden>
  //       )
  //     }}
  //     leftOpenValue={80}
  //     previewRowKey="1"
  //     previewOpenValue={80}
  //     previewOpenDelay={3000}
  //     disableLeftSwipe
  //     showsHorizontalScrollIndicator={false}
  //     style={{ flex: 1, paddingBottom: 30, marginBottom: 40 }}
  //   />
  // );
}

export default ListItems;