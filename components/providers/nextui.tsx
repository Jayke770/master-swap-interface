'use client'
import { NextUIProvider as NUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
export default function NextUIProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <NUIProvider navigate={router.push}>
            <AnimatePresence mode='wait'>
                {children}
            </AnimatePresence>
        </NUIProvider>
    )
}