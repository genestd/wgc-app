import React from 'react'
import * as eva from '@eva-design/eva'
import Amplify from '@aws-amplify/core'
import aws_exports from './src/aws-exports'
import { ApplicationProvider } from '@ui-kitten/components'
import { WGCProvider } from './src/store/context'
import Main from './Main'
Amplify.configure(aws_exports)

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <WGCProvider>
        <Main />
      </WGCProvider>
    </ApplicationProvider>
  );
}