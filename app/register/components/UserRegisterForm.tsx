"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import UserRegisterSchema from "../schemas/UserRegisterSchema";
import TUserRegisterSchema from "../schemas/TUserRegisterSchema";
import RegCodeField from "@/app/common/components/RegCodeField";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DOBCalendar } from "@/components/ui/dob-calendar";

const UserRegisterForm = () => {
  const form = useForm<TUserRegisterSchema>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      dob: new Date(),
      regCode: "",
      provCode: "",
      citymunCode: "",
      brgyCode: "",
      gender: "MALE",
      covidStatus: "NEGATIVE",
    },
  });
  const onSubmit = (values: TUserRegisterSchema) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <FormField
          name="fname"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>FIRST NAME</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="lname"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>LAST NAME</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>EMAIL ADDRESS</FormLabel>
                <FormControl>
                  <Input placeholder="sample@gmail.com" {...field} />
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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {/* TODO: DOB */}
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>BIRTH DATE</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <DOBCalendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={field.value}
                    onSelect={field.onChange}
                    fromYear={1960}
                    toYear={2030}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="regCode"
          control={form.control}
          render={({ field }) => {
            return <RegCodeField field={field} />;
          }}
        />
        <Button
          type="submit"
          className="text-white font-bold rounded-full"
          onClick={() => {
            console.log(form.getValues());
          }}
        >
          REGISTER
        </Button>
      </form>
    </Form>
  );
};

export default UserRegisterForm;
