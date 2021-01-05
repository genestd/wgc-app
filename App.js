import React from 'react'
import * as eva from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import Amplify from '@aws-amplify/core'
import aws_exports from './src/aws-exports'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { WGCGlobalProvider } from './src/globalStore/context'
import { WGCAuthProvider } from './src/components/auth/store/context'
import { default as WGCTheme } from './src/styles/wgcTheme.json'
import Main from './Main'
import { default as mapping } from './mapping.json'
Amplify.configure(aws_exports)

export default function App() {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...WGCTheme}} customMapping={mapping}>
        <WGCGlobalProvider>
          <WGCAuthProvider>
            <Main />
          </WGCAuthProvider>
        </WGCGlobalProvider>
      </ApplicationProvider>
    </>
  )
}