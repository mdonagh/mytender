import React, { useState } from "react";

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
import { gql, useQuery } from '@apollo/client';

import { useMutation } from "@apollo/client";


import { MY_SHIFTS } from "../gql/myShifts";

import { DELETE_SHIFT } from "../gql/deleteShift";


import Moment from 'moment';

function ListShift() {
  Moment.locale('en');

  const { loading, error, data, refetch } = useQuery(MY_SHIFTS, {
    variables:  {personal: true},
  });

  const [deleteShift, { mutationData, mutationLoading, mutationError }] = useMutation(DELETE_SHIFT);

  const shiftDelete = (id) => {
    console.log(id);
    console.log('got here');
    deleteShift({variables: {id: id}})
      .then(response => {
        console.log(JSON.stringify(response));
        refetch({ personal: true })
      })
      .catch(error => {
                refetch({ personal: true })

        console.log(JSON.stringify(error));
      })
  }

let rows = (<></>);
if(loading){
  console.log('loading now');
}
  if(!loading){
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(error));

    rows = data["shifts"]["nodes"].map(function(node, i){
      return (
      <ListItem bottomDivider key={i}>
        <ListItem.Content>
          <ListItem.Title>{Moment(node['startTime']).format('MMMM Do YYYY, h:mm:ss a')}</ListItem.Title>
          <ListItem.Subtitle>{node['address']}</ListItem.Subtitle>
          <ListItem.Subtitle>{node['notes']}</ListItem.Subtitle>
        </ListItem.Content>
        <Feather
          name="delete"
          size={24}
          color="red"
          onPress={() => shiftDelete(node['id'])}
        />
      </ListItem>
      )
  })
}
  return (
    <>
    {rows}
    </>
  );
}


export default ListShift;
