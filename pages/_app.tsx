import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import * as React from 'react';

import { AuthContextProvider } from '../firebase/auth-context-provider';
import DarkThemeOptions from '../styles/theme/darkThemeOptions';
import { getApolloClient } from '../utility/apollo-client';
import createEmotionCache from '../utility/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(DarkThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const client = getApolloClient({ forceNew: false });

  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </AuthContextProvider>
  );
};

export default MyApp;
