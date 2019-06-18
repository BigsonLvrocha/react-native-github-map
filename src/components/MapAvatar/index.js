import React from 'react';
import PropTypes from 'prop-types';
import { Marker, Callout } from 'react-native-maps';
import {
  MapAvatarImage, CalloutView, BioText, NameText,
} from './styles';

const MapAvatar = ({ userLocation }) => (
  <Marker
    coordinate={{
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    }}
  >
    <MapAvatarImage source={{ uri: userLocation.user.avatar_url }} />
    <Callout title={userLocation.user.login}>
      <CalloutView>
        <NameText>{userLocation.user.login}</NameText>
        {userLocation.user.bio && <BioText>{userLocation.user.bio}</BioText>}
      </CalloutView>
    </Callout>
  </Marker>
);

MapAvatar.propTypes = {
  userLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MapAvatar;
