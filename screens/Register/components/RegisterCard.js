import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const RegisterCard = ({ buttons, description, inputs }) => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Card
        style={{
          width: '80%',
        }}
      >
        <Card.Content
          style={{
            gap: 16,
          }}
        >
          {description ? <Text>{description}</Text> : null}
          {inputs ? inputs : null}
          {buttons ? buttons : null}
        </Card.Content>
      </Card>
    </View>
  );
};

export default RegisterCard;
