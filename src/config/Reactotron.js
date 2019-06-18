import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '192.168.0.2',
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  // eslint-disable-next-line no-console
  tron.clear();
  console.tron = tron;
  tron.clear();
}
