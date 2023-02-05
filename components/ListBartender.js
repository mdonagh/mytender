import { 
         Pressable,
       } from "react-native";

import { ListItem, Avatar } from '@rneui/themed';

function ListBartender() {
  return (
    <>
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/30.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>TGI Fridays</ListItem.Subtitle>
          <ListItem.Subtitle>.5 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: 'person-outline',
            type: 'material',
            size: 26,
          }}
          source={{ uri: 'https://randomuser.me/api/portraits/men/24.jpg' }}
          containerStyle={{ backgroundColor: '#c2c2c2' }}
        />
        <ListItem.Content>
          <ListItem.Title>Alba King</ListItem.Title>
          <ListItem.Subtitle>Applebee's</ListItem.Subtitle>
          <ListItem.Subtitle>10 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar 
        rounded 
        title="A" 
        containerStyle={{ backgroundColor: 'grey' }} 
       source={{ uri: 'https://randomuser.me/api/portraits/women/19.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Yasmin Freeman</ListItem.Title>
          <ListItem.Subtitle>Aeroclub Bar</ListItem.Subtitle>
          <ListItem.Subtitle>20 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar 
        rounded 
        title="A" 
        containerStyle={{ backgroundColor: 'grey' }} 
       source={{ uri: 'https://randomuser.me/api/portraits/women/25.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Brenda Weaver</ListItem.Title>
          <ListItem.Subtitle>Polite Provisions</ListItem.Subtitle>
          <ListItem.Subtitle>20 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar 
        rounded 
        title="A" 
        containerStyle={{ backgroundColor: 'grey' }} 
       source={{ uri: 'https://randomuser.me/api/portraits/women/26.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Carrie Glover</ListItem.Title>
          <ListItem.Subtitle>Sycamore Den</ListItem.Subtitle>
          <ListItem.Subtitle>20 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar 
        rounded 
        title="A" 
        containerStyle={{ backgroundColor: 'grey' }} 
       source={{ uri: 'https://randomuser.me/api/portraits/women/27.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Mollie Morton</ListItem.Title>
          <ListItem.Subtitle>Sidecar Bar</ListItem.Subtitle>
          <ListItem.Subtitle>20 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar 
        rounded 
        title="A" 
        containerStyle={{ backgroundColor: 'grey' }} 
       source={{ uri: 'https://randomuser.me/api/portraits/women/28.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Aishah Garner</ListItem.Title>
          <ListItem.Subtitle>False Idol</ListItem.Subtitle>
          <ListItem.Subtitle>20 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Avatar 
        rounded 
        title="A" 
        containerStyle={{ backgroundColor: 'grey' }} 
       source={{ uri: 'https://randomuser.me/api/portraits/women/29.jpg' }}
        />
        <ListItem.Content>
          <ListItem.Title>Monica Shannon</ListItem.Title>
          <ListItem.Subtitle>The Cordova Bar</ListItem.Subtitle>
          <ListItem.Subtitle>20 miles away</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
}

export default ListBartender;
