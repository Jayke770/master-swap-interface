"use client"
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';
import { type ReactNode } from 'react';
import { envClientConfig } from '@/lib/config'
export default function TonProvider({ children }: { children: ReactNode }) {
    return (
        <TonConnectUIProvider
            uiPreferences={{ theme: THEME.DARK }}
            restoreConnection
            enableAndroidBackHandler
            manifestUrl={`${envClientConfig.TONCONNECT_URL}/tonconnect-manifest.json`}>
            {children}
        </TonConnectUIProvider>
    )
}   