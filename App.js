import React from 'react'
import * as eva from '@eva-design/eva'
import Amplify from '@aws-amplify/core'
import aws_exports from './src/aws-exports'
import { ApplicationProvider } from '@ui-kitten/components'
import { WGCGlobalProvider } from './src/globalStore/context'
import { WGCAuthProvider } from './src/components/auth/store/context'
import { default as WGCTheme } from './src/styles/wgcTheme.json'

import Main from './Main'
Amplify.configure(aws_exports)

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...WGCTheme}}>
      <WGCGlobalProvider>
        <WGCAuthProvider>
          <Main />
        </WGCAuthProvider>
      </WGCGlobalProvider>
    </ApplicationProvider>
  );
}