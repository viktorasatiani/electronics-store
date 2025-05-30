"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { subscribeAccount } from "@/lib/appwrite/appwrite";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

export function SubscriptionInput() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    subscribeAccount(values.email);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-3/4 flex-col space-y-6 lg:flex-row lg:items-end lg:justify-end lg:gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="rounded-full py-6 text-black focus-visible:ring-transparent md:py-6 md:text-sm lg:w-full lg:py-3 lg:text-base xl:py-6"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded-full py-6 text-lg font-light uppercase outline-2 hover:bg-transparent hover:outline md:py-6 lg:w-1/3"
          style={{ transition: "all 0.6s" }}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
