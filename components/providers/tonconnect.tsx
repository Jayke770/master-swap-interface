"use client"
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type ReactNode } from 'react';
export default function TonProvider({ children }: { children: ReactNode }) {
    return (
        <TonConnectUIProvider
            uiPreferences={{ theme: "SYSTEM" }}
            manifestUrl='https://66n9855d-3000.asse.devtunnels.ms/tonconnect-manifest.json'>
            {children}
        </TonConnectUIProvider>
    )
}