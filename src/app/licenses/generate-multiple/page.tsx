"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { LicenseKeyGeneratorSchema } from "@/schemas/generatorSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronsUpDown, Command, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
function Page() {
  const form = useForm<z.infer<typeof LicenseKeyGeneratorSchema>>({
    resolver: zodResolver(LicenseKeyGeneratorSchema),
    defaultValues: {
      //Todo: add
    },
  });
  function onSubmit(values: z.infer<typeof LicenseKeyGeneratorSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setTheme } = useTheme();
  return (
    <>
      <div className="w-full h-full flex justify-center rounded-md items-center">
        <div className="absolute right-10 top-10">
          <Button variant="outline" size="icon">
            <Sun
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              onClick={() => setTheme("dark")}
            />
            <Moon
              className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              onClick={() => setTheme("light")}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div className="h-[80%] w-[80%] xl:w-[70%] shadow-2xl rounded-xl  bg-neutral-900 overflow-clip">
          <div className="flex h-full">
            <div className=" h-full flex-1 flex justify-center items-center bg-transparent">
              <Card className="p-3 w-[70%]">
                <CardHeader>
                  <CardTitle>License Key Generator</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="secretKey"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block">Passphrase</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">
                                  m@example.com
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  m@google.com
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  m@support.com
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="secretKey"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Passphrase</FormLabel>
                            <FormControl>
                              <Input placeholder="Passphrase" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="prefix"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First 4 Characters</FormLabel>
                            <FormControl>
                              <Input placeholder="ABCD" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="keyCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Total keys</FormLabel>
                            <FormControl>
                              <Input placeholder="1000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            <div className=" h-full flex-1 bg-slate-100"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
