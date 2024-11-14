"use client"

import { Button } from "@/components/ui/button";

import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default function  Home() {
  // const {userId} = useAuth()
  // const {userId} = auth()

  // if (userId != null ) redirect("/dashboard")
  return (
    <div className="flex">
      {/* <Button>
        <SignInButton />
      </Button>
      <Button>
        <SignUpButton />
      </Button> */}
    </div>
  );
}

// homework --- classworck
// install chart6 --- clerk