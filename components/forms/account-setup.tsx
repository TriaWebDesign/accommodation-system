"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

const formSchema = z.object({
  school_id: z
    .string({})
    .min(9, { message: "Please enter a valid ID" })
    .max(9, { message: "Please enter a valid ID." }),
  firstname: z.string(),
  middlename: z.string(),
  lastname: z.string(),
  learning_disorder: z
    .string()
    .min(1, { message: "Please select a learning disorder." }),
  image_documents: z
    .array(z.string())
    .min(1, { message: "Include atleast 1 valid medical certificate." })
    .max(5, { message: "Maximum of 5 documents only." }),
});

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { learningDisorders } from "@/lib/globals";
import Image from "next/image";
import { toast } from "../ui/use-toast";
import { getStudent } from "@/lib/actions/student.actions";

export default function AccountSetup({
  userData,
}: {
  userData: {
    id: string;
    email: string;
    firstname: string | null;
    lastname: string | null;
    imageUrl: string;
  };
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school_id: "",
      learning_disorder: "",
      image_documents: [],
      firstname: userData.firstname || "",
      middlename: "",
      lastname: userData.lastname || "",
    },
  });
  const docs = useWatch({
    control: form.control,
    name: "image_documents",
  });

  const handleFileChange = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(fileArray);
      form.setValue("image_documents", fileArray);
    }
  };
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submit");

    const student = await getStudent(values.school_id);
    toast({
      title: "Form Submitted",
      description: `${JSON.stringify(student)}`,
    });
    //await createUser(id, values);
    //router.push("/");
  }
  return (
    <>
      <div className="flex justify-between w-full gap-20 flex-wrap">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="school_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School ID:</FormLabel>
                  <FormControl>
                    <Input placeholder="School ID" {...field} />
                  </FormControl>
                  <FormDescription>
                    Valid school ID e.g 202100122
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname:</FormLabel>
                  <FormControl>
                    <Input placeholder="Firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middlename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middlename:</FormLabel>
                  <FormControl>
                    <Input placeholder="Middlename" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lastname:</FormLabel>
                  <FormControl>
                    <Input placeholder="Lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="learning_disorder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Learning Disorder:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Learning Disorder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {learningDisorders.map((disorder) => (
                        <SelectItem value={disorder.short} key={disorder.short}>
                          {disorder.full}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image_documents"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      type="file"
                      multiple
                      accept="image/png, image/jpeg"
                      onChange={(e) => handleFileChange(e.target.files)}
                    />
                  </FormControl>
                  <FormDescription>Valid Medical Certificates</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-20">
              Submit
            </Button>
          </form>
        </Form>
        <section className="flex-1">
          <h1 className="mb-2">Documents Preview:</h1>
          <div className="flex flex-wrap gap-4 overflow-y-auto h-[265px] bg-foreground/10 rounded-sm p-1">
            {docs.map((doc, i) => (
              <Image
                src={doc}
                alt="doc"
                width={200}
                height={200}
                key={i}
                className="h-auto"
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
