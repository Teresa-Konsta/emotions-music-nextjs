import { Provider } from 'react-redux';
import store from '../store/index';

import Container from '@/components/UI/Container';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
}
