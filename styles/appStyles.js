import styled from "styled-components"

import Constants from "expo-constants"

export const colors = {
  primary: "#fff", // white
  secondary: "#0CC9CA", // green
  tertiary: "#999999", // gray
  alternative: "#F95E21", // orange
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
  color: ${colors.tertiary};
  letter-spacing: 2px;
  font-style: italic;
`

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`

export const ListView = styled.TouchableHighlight`
  background-color:${colors.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom:15px;
  border-radius: 10px;
`

export const ListViewHidden = styled.View`
  background-color:${colors.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px:
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
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.alternative};
  text-align: right;
  text-transform: uppercase;
`
