import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Provider as NextAutProvider } from 'next-auth/client';

import '../styles/global.scss';


function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <NextAutProvider session={pageProps.session}>
  <Header />
  <Component {...pageProps} />
  </NextAutProvider>
  )
}

export default MyApp
