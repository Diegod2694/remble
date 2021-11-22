import React from "react"
import { Modal } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import moment from "moment"

import {
  ModalButton,
  ModalButtonContainer,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  ModalText,
  colors
} from "../styles/appStyles"

const InputModal = ({
    isModalOpen,
    setModalOpen,
    todoInputValue,
    setTodoInputValue,
    handleAddTodo,
    todoToBeEdited,
    setTodoToBeEdited,
    handleEditTodo,
    todos
  }) => {

  const handleCloseModal = () => {
    setModalOpen(false)
    setTodoInputValue('')
    setTodoToBeEdited(null)
  }

  const handleSubmit = () => {
    if (todoToBeEdited) {
      handleEditTodo({
        ...todoToBeEdited,
        title: todoInputValue,
      })
    } else {
      const key =
        `${todos[todos.length - 1] ? parseInt(todos[todos.length - 1].key + 1) : 1}`
      handleAddTodo({
        title: todoInputValue,
        date: moment().format("MM/DD/YY"),
        key,
        isDone: false,
      })
    }
    setTodoInputValue('')
  }

  return (
    <>
      <ModalButtonContainer onPress={() => setModalOpen(true)}>
        <ModalButton>
          <AntDesign name="plus" size={20} color={colors.primary} />
        </ModalButton>
        <ModalText>New Reminder</ModalText>
      </ModalButtonContainer>
      <Modal
        animationType="type"
        transparent
        visible={isModalOpen}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <AntDesign name="edit" size={30} color={colors.primary} />
            </ModalIcon>
            <StyledInput
              placeholder="add a todo"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={colors.primary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default InputModal
