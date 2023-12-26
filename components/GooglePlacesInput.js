import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class GooglePlacesInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={(row) => row.description} // custom description render
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          console.log('data');
          console.log(JSON.stringify(data));
          console.log('details');
          console.log(JSON.stringify(details));
          this.props.selectLocation({
            barName: data['structured_formatting']['main_text'],
            address: details['formatted_address'],
            latitude: details['geometry']['location']['lat'],
            longitude: details['geometry']['location']['lng'],
          });
        }}
        getDefaultValue={() => ''}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          // Dont steal me!!! I am IP protected
          key: 'AIzaSyBGISTBeTkx_BIR1hySQD0a1DHGokLpdKA',
          language: 'en', // language of the results
          types: 'bar|restaurant', // default: 'geocode'
        }}
        styles={{
          textInputContainer: {
            width: '80%'
          },
          textInput: {
            width: '80%'
          },
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
          // ,
          // types: 'food'
        }}
        filterReverseGeocodingByTypes={[
          'locality',
          'administrative_area_level_3',
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        predefinedPlaces={[]}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        // renderLeftButton={()  => <Text>Custom text after the input</Text>}
        // renderRightButton={() => <Text>Custom text after the input</Text>}
      />
    );
  }
}

export default GooglePlacesInput;
