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
  Image,
  Modal,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  ButtonGroup
} from "@nextui-org/react";
import { useLocalstorageState } from 'rooks'
import * as lodash from 'lodash'
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'
import { Search } from 'lucide-react';
const tradeTabs = ["swap", "send", "buy"]
export default function Home() {
  const {
    isOpen: isOpenToken,
    onOpen: onOpenTokens,
    onClose: onCloseTokens } = useDisclosure();
  const [tradeTab, setTradeTab] = useState<"swap" | "send" | "buy">("swap")
  const onSetTradeTab = (tab: "swap" | "send" | "buy") => setTradeTab(tab)
  const onToggleTokensModal = () => isOpenToken ? onCloseTokens() : onOpenTokens()
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

      <section className='flex justify-center items-center w-full h-full mt-5 md:mt-10'>
        <div className="flex flex-col w-full md:w-[500px] h-full p-4">
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: "spring", duration: 0.9 }}
            className="flex gap-2">
            {tradeTabs.map(tab => (
              <Button
                key={tab}
                radius="lg"
                color={tradeTab === tab ? "primary" : "default"}
                onClick={() => onSetTradeTab(tab as any)}
                variant={tradeTab === tab ? "shadow" : "flat"}>{lodash.capitalize(tab)}</Button>
            ))}
          </motion.div>
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
                  transition={{ type: "spring", duration: 0.50, delay: 0.1 }}>
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
                        }
                        onClick={onToggleTokensModal}>
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
                  transition={{ type: "spring", duration: 0.50, delay: 0.2 }}>
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
                        }
                        onClick={onToggleTokensModal}>
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
                transition={{ type: "spring", duration: 0.50, delay: 0.3 }}
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
      </section>

      <Modal
        size='md'
        isOpen={isOpenToken}
        backdrop='blur'
        scrollBehavior='inside'
        onClose={onToggleTokensModal}>
        <ModalContent>
          <ModalHeader>Select Token</ModalHeader>
          <ModalBody>
            <Input
              placeholder='Search Token'
              variant='bordered'
              color='primary'
              size='lg'
              startContent={<Search strokeWidth={"1.5"} />} />
            <div className='flex flex-col gap-2'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Button
                  key={i}
                  as={"div"}
                  role='button'
                  variant='light'
                  className=' justify-start items-center h-16'
                  startContent={
                    <Image
                      className="w-10 h-10"
                      radius="full"
                      removeWrapper
                      src="https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
                      alt="coin" />
                  }>
                  <div>
                    <p className=' font-semibold text-md '>USDC Coin</p>
                    <span className='text-xs font-light dark:text-gray-400'>USDC</span>
                  </div>
                </Button>
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}