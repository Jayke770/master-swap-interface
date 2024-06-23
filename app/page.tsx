"use client"
import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Card,
  Input,
  Image
} from "@nextui-org/react";
import { useLocalstorageState } from 'rooks'
import * as lodash from 'lodash'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'
const tradeTabs = ["swap", "send", "buy"]
export default function Home() {
  const [tradeTab, setTradeTab] = useState<"swap" | "send" | "buy">("swap")
  const onSetTradeTab = (tab: "swap" | "send" | "buy") => setTradeTab(tab)
  return (
    <>
      <Navbar isBlurred isBordered maxWidth="xl">
        <NavbarContent>
          <NavbarMenuToggle
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">MasterSwap</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end" as={"div"}>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="shadow">
              Connect Wallet
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div className="flex flex-col w-full h-full mt-10 p-4">
        <div className="flex gap-2">
          {tradeTabs.map(tab => (
            <Button
              key={tab}
              radius="lg"
              color={tradeTab === tab ? "primary" : "default"}
              onClick={() => onSetTradeTab(tab as any)}
              variant={tradeTab === tab ? "shadow" : "flat"}>{lodash.capitalize(tab)}</Button>
          ))}
        </div>
        {tradeTab === "swap" && (
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 mt-5">
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0
                }}
                transition={{ type: "spring", duration: 0.50 }}>
                <Input
                  type="text"
                  label="Sell"
                  variant="bordered"
                  defaultValue="0"
                  placeholder="0"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                  inputMode="decimal"
                  autoCorrect="off"
                  autoComplete="off"
                  spellCheck="false"
                  classNames={{
                    label: "text-lg",
                    inputWrapper: "h-28 px-4 pb-4",
                    input: "text-3xl"
                  }}
                  endContent={
                    <Button
                      variant="flat"
                      color="primary"
                      startContent={
                        <Image
                          className="w-5 h-5"
                          radius="full"
                          removeWrapper
                          src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                          alt="coin" />
                      }>
                      USDC
                    </Button>
                  } />
              </motion.div>
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0
                }}
                transition={{ type: "spring", duration: 0.50, delay: 0.1 }}>
                <Input
                  type="text"
                  label="Buy"
                  variant="bordered"
                  defaultValue="0"
                  placeholder="0"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                  inputMode="decimal"
                  autoCorrect="off"
                  autoComplete="off"
                  spellCheck="false"
                  classNames={{
                    label: "text-lg",
                    inputWrapper: "h-28 px-4 pb-4",
                    input: "text-3xl"
                  }}
                  endContent={
                    <Button
                      variant="flat"
                      color="primary"
                      startContent={
                        <Image
                          className="w-5 h-5"
                          radius="full"
                          removeWrapper
                          src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                          alt="coin" />
                      }>
                      USDC
                    </Button>
                  } />
              </motion.div>
            </div>
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.8,
                opacity: 0
              }}
              transition={{ type: "spring", duration: 0.50, delay: 0.2 }}
              className=' w-full'>
              <Button
                className="mt-3"
                size="lg"
                variant="shadow"
                color="primary"
                fullWidth
                type="submit">Swap</Button>
            </motion.div>
          </div>
        )}
      </div>
    </>
  )
}