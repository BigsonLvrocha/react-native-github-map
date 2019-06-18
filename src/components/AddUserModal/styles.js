import { metrics, colors } from '~/styles';
import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalContainer = styled.View`
  background-color: ${colors.darkTransparent};
  flex: 1;
  justify-content: center;
  align-content: center;
  padding: ${metrics.basePadding}px;
`;

export const Container = styled.View`
  padding: ${metrics.basePadding}px;
  align-items: stretch;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.black};
  margin: ${metrics.baseMargin}px;
`;

export const Input = styled.TextInput`
  border-radius: ${metrics.baseRadius};
  border-color: ${colors.dark};
  border-width: 1px;
  margin-top: ${metrics.baseMargin};
  padding: ${metrics.basePadding}px;
`;

export const ErrorText = styled.Text`
  text-align: center;
  color: ${colors.danger};
`;

export const ButtonContainer = styled.View`
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  padding: ${metrics.basePadding}px;
  flex: 1;
  margin-right: ${metrics.baseMargin / 2}px;
  background: ${colors.light};
  border-radius: ${metrics.baseRadius}px;
  justify-content: center;
`;

export const SaveButton = styled.TouchableOpacity`
  padding: ${metrics.basePadding}px;
  flex: 1;
  margin-left: ${metrics.baseMargin / 2}px;
  background: ${colors.success};
  border-radius: ${metrics.baseRadius}px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
`;
