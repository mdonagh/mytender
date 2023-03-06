import { 
         Pressable,
         Text,
         View,
         StyleSheet
       } from "react-native";

import { ListItem, Avatar } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

function ListShift() {
  return (
    <>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>9PM-2AM, Monday, Febuary 22 </ListItem.Title>
          <ListItem.Subtitle>TGI Fridays</ListItem.Subtitle>
          <ListItem.Subtitle>Half off hot wings!</ListItem.Subtitle>
        </ListItem.Content>
        <AntDesign name="edit" size={24} color="black" />
        <Feather name="delete" size={24} color="red" />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>9PM-2AM, Monday, Febuary 22 </ListItem.Title>
          <ListItem.Subtitle>TGI Fridays</ListItem.Subtitle>
          <ListItem.Subtitle>Half off hot wings!</ListItem.Subtitle>
        </ListItem.Content>
        <AntDesign name="edit" size={24} color="black" />
        <Feather name="delete" size={24} color="red" />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>9PM-2AM, Monday, Febuary 22 </ListItem.Title>
          <ListItem.Subtitle>TGI Fridays</ListItem.Subtitle>
          <ListItem.Subtitle>Half off hot wings!</ListItem.Subtitle>
        </ListItem.Content>
        <AntDesign name="edit" size={24} color="black" />
        <Feather name="delete" size={24} color="red" />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>9PM-2AM, Monday, Febuary 22 </ListItem.Title>
          <ListItem.Subtitle>TGI Fridays</ListItem.Subtitle>
          <ListItem.Subtitle>Half off hot wings!</ListItem.Subtitle>
        </ListItem.Content>
        <AntDesign name="edit" size={24} color="black" />
        <Feather name="delete" size={24} color="red" />
      </ListItem>
    </>
  );
}


export default ListShift;
