import React from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import AuthContainer from './src/components/auth/AuthContainer'
import { WGCProvider } from './src/store/context';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <WGCProvider>
        <AuthContainer />
      </WGCProvider>
    </ApplicationProvider>
  );
}
