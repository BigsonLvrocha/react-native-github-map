import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainMap from '~/pages/MainMap';

export default createAppContainer(createSwitchNavigator({ MainMap }));
