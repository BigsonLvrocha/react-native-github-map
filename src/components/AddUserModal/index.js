import React, { Component } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkersCreators } from '~/store/ducks/markers';
import PropTypes from 'prop-types';
import {
  Container,
  ButtonContainer,
  Input,
  CancelButton,
  SaveButton,
  Title,
  ErrorText,
  ButtonText,
  ModalContainer,
} from './styles';

class AddUserModal extends Component {
  state = {
    username: '',
  };

  static propTypes = {
    isModalVisible: PropTypes.bool.isRequired,
    clearToAddUser: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { username } = this.state;
    const {
      isModalVisible, clearToAddUser, addUserRequest, error, isLoading,
    } = this.props;
    return (
      <Modal
        visible={isModalVisible}
        onRequestClose={() => clearToAddUser()}
        transparent
        animationType="slide"
      >
        <ModalContainer>
          <Container>
            <Title>Adicionar novo local</Title>
            {error && <ErrorText>{error}</ErrorText>}
            <Input
              value={username}
              onChangeText={text => this.setState({ username: text })}
              placeholder="Insira um usuário do github"
            />
            <ButtonContainer>
              <CancelButton disabled={isLoading} onPress={() => clearToAddUser()}>
                <ButtonText>Cancelar</ButtonText>
              </CancelButton>
              <SaveButton disabled={isLoading} onPress={() => addUserRequest(username)}>
                {isLoading ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <ButtonText>Salvar</ButtonText>
                )}
              </SaveButton>
            </ButtonContainer>
          </Container>
        </ModalContainer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  error: state.markers.error,
  isModalVisible: state.markers.addingUserCoordinates !== null,
  isLoading: state.markers.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(MarkersCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserModal);
