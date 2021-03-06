import Header from '../components/header';

import buildClient from '../api/build-client';

import 'bootstrap/dist/css/bootstrap.css';

const AppComponent = ({ Component, currentUser, pageProps }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { ...data, pageProps };
};

export default AppComponent;
