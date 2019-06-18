import React, { Fragment } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkersCreators } from '~/store/ducks/markers';
import AddUserModal from '~/components/AddUserModal';
import MapAvatar from '~/components/MapAvatar';
import PropTypes from 'prop-types';
import styles from './styles';

const MainMap = ({ data, setToAddUser }) => {
  console.tron.log(data);
  console.tron.log(MapAvatar);
  return (
    <Fragment>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: -27.2177659,
          longitude: -49.6451598,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031,
        }}
        onLongPress={event => setToAddUser(
          event.nativeEvent.coordinate.latitude,
          event.nativeEvent.coordinate.longitude,
        )
        }
      >
        {data.map(item => (
          <MapAvatar key={item.user.id} userLocation={item} />
        ))}
      </MapView>
      <AddUserModal />
    </Fragment>
  );
};

MainMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      user: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        bio: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
  setToAddUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.markers.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(MarkersCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMap);
