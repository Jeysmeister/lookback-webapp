"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import UserRegisterForm from "./components/UserRegisterForm";

const Page = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-8 gap-4">
      <Image src={"/Logo.png"} alt="LOGO" height={100} width={200} />
      <div className="font-bold text-2xl">LOG IN</div>
      <div className="flex gap-4 w-full justify-center">
        <Button
          onClick={() => {
            setIsUser(true);
          }}
          className={`rounded-full font-bold w-full ${
            isUser ? "bg-primary text-white" : "bg-white text-primary"
          } hover:text-white`}
        >
          USER
        </Button>
        <Button
          onClick={() => {
            setIsUser(false);
          }}
          className={`rounded-full font-bold w-full ${
            !isUser ? "bg-primary text-white" : "bg-white text-primary"
          } hover:text-white`}
        >
          MANAGEMENT
        </Button>
      </div>
      {isUser ? <UserRegisterForm /> : "MANAGEMENT REGISTER FORM"}
    </div>
  );
};

export default Page;
