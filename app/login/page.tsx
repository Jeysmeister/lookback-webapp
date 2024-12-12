"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Please enter your username."),
  password: z.string().min(1, "Please enter your password."),
});
export type TLoginSchema = z.infer<typeof loginSchema>;

const Page = () => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (values: TLoginSchema) => {
    console.log(values);
  };
  const [isUser, setIsUser] = useState(true);
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>USERNAME</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>PASSWORD</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button className="text-white font-bold rounded-full">LOG IN</Button>
        </form>
      </Form>
      <div>
        No account yet? <span className="font-bold cursor-pointer">Register here</span>
      </div>
    </div>
  );
};

export default Page;
