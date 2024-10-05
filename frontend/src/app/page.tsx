'use client'
import { Button } from "@/components/ui/button";
import "./styles/globals.css";
import Diagram from "@/components/Diagram";
export default function Home() {
  return (
    <div className="">
     <Diagram/>
     <Button>Tornike</Button>
    </div>
  );
}
