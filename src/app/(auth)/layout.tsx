import React, { ReactNode } from 'react'

import type { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

export default async function AuthLayout({ children }: { children: ReactNode, req: NextApiRequest, res: NextApiResponse }) {
  const { userId } = (await auth())
  if (userId != null) redirect("/")
  return (
    <div>
      {children}
      <Button>
        <SignInButton />
      </Button>
      <Button>
        <SignUpButton />
      </Button>
    </div>
  )
}
