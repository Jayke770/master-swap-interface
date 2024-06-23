"use client"
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';
import { type ReactNode } from 'react';
export default function TonProvider({ children }: { children: ReactNode }) {
    return (
        <TonConnectUIProvider
            uiPreferences={{ theme: THEME.DARK }}
            restoreConnection
            enableAndroidBackHandler
            manifestUrl='https://66n9855d-3000.asse.devtunnels.ms/tonconnect-manifest.json'>
            {children}
        </TonConnectUIProvider>
    )
}