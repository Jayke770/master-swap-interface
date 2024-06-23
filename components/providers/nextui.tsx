'use client'
import { NextUIProvider as NUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import { type ReactNode } from 'react'
export default function NextUIProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    return (
        <NUIProvider navigate={router.push}>
            <AnimatePresence mode='wait'>
                {children}
            </AnimatePresence>
        </NUIProvider>
    )
}