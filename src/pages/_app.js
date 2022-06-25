import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

// export default function CustomApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
///
import { getAppCookies, verifyToken } from '../../middleware/utils';
function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const {
    store,
    isServer,
    req,
    query: { amp },
    asPath,
  } = ctx;

  const { token } = getAppCookies(req);
  const user = token && verifyToken(token.replace('Bearer ', ''));

  let pageProps = { user, asPath };
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { pageProps };
};

export default MyApp;