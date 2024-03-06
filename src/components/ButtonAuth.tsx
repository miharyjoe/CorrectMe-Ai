"use client"
import { Button } from './ui/button'
import { signIn, signOut } from 'next-auth/react'

export const ButtonLogin = () => {
  return (
    <Button onClick={() => signIn()}>
      Login
    </Button>
  )
}

export const ButtonLogOut = () => {
  return (
    <Button onClick={() => signOut()}>
      LogOut
    </Button>
  )
}
