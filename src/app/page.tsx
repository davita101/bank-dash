// "use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignInSignUpButtons() {
  const userId = (await auth()).userId

  if (userId !== null) return redirect("/dashboard")

  
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Card>
        <CardHeader>
          <CardTitle>Auth your account</CardTitle>
          <CardDescription>!t is important!</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant={"outline"} asChild>
            <SignInButton />
          </Button>
          <Button variant={"outline"} asChild>
            <SignUpButton />
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}
