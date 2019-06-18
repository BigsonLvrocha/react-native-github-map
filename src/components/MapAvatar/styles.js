import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const MapAvatarImage = styled.Image`
  border-radius: 25;
  height: 50px;
  width: 50px;
  border-color: ${colors.white};
  border-width: 2px;
`;

export const CalloutView = styled.View`
  width: ${metrics.screenWidth * 0.5};
`;

export const NameText = styled.Text`
  font-size: 16;
  font-weight: bold;
  text-align: center;
`;

export const BioText = styled.Text`
  color: ${colors.regular};
  font-size: 12;
  margin-top: ${metrics.baseMargin / 2}px;
  text-align: justify;
`;
