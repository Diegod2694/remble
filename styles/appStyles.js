import styled from "styled-components"

import Constants from "expo-constants"

export const colors = {
  primary: "#fff", // white
  secondary: "blue",
  tertiary: "black",
  alternative: "#999999",
}

const statusBarHeight = Constants.statusBarHeight

export const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  padding: 20px;
  padding-bottom: 20px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  padding-horizontal: 20px;
  color: ${colors.secondary};
`

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`

export const ListViewContainer = styled.View`
  flex-direction: row;
  background-color:${colors.primary};
  min-height: 85px;
  width: 100%;
`

export const CheckboxContainer = styled.TouchableHighlight`
  background-color:${colors.primary};
  min-height: 85px;
  width: 60px;
  padding: 15px;
`

export const ListView = styled.TouchableHighlight`
  background-color:${colors.primary};
  min-height: 85px;
  padding: 15px;
  width: 100%;
  justify-content: space-around;
  margin-bottom:15px;
  border-bottom-color: ${colors.alternative};
  border-bottom-width: 1;
`

export const ListViewHidden = styled.View`
  background-color:${colors.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing; 1px;
  color: ${colors.tertiary};
`

export const TodoDate = styled.Text`
  font-size: 14px;
  color: ${colors.alternative};
`

export const SwipedTodoText = styled(TodoText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`

export const ModalButton = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${colors.secondary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;

`

export const ModalButtonContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 15px;
  height: 50px;
  flex-direction: row;
  padding-left: 20px
`

export const ModalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-horizontal: 20px;
  color: ${colors.secondary};
`

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.primary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  letter-spacing: 1px;
`

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.primary};
`

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${props => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 35px;
`

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`