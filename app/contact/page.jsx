"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const ContactSchema = z.object({
  firstname: z
    .string()
    .min(3, "The firstname must be at least 3 characters long"),
  lastname: z
    .string()
    .min(3, "The lastname must be at least 3 characters long"),
  email: z.email("Email invalid"),
  phone: z
    .string()
    .min(10, "The phone number must be at least 10 characters long"),
  service: z.string().nonempty("Please select a service"),
  message: z
    .string()
    .min(10, "The message must be at least 10 characters long"),
});

const info = [
  { icon: TbPhone, name: "Phone", value: "(+57) 350 613 0442" },
  {
    icon: HiOutlineMail,
    name: "Email",
    value: "andreslopezalvaradooo@gmail.com",
  },
  { icon: GrLocation, name: "Location", value: "Bogotá D.C." },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="container flex flex-col md:flex-row gap-4 items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-primary md:w-1/2 p-3 rounded-md"
      >
        <FieldSet>
          <FieldLegend className="text-accent">Let´s work together</FieldLegend>

          <FieldDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            cumque facilis quod ad dolores a quo molestias.
          </FieldDescription>

          <FieldGroup>
            <Field>
              <Input
                id="firstname"
                autoComplete="off"
                placeholder="Firstname"
                aria-invalid={!!errors.firstname}
                {...register("firstname")}
              />

              <FieldError>{errors.firstname?.message}</FieldError>
            </Field>

            <Field>
              <Input
                id="lastname"
                autoComplete="off"
                placeholder="Lastname"
                aria-invalid={!!errors.lastname}
                {...register("lastname")}
              />

              <FieldError>{errors.lastname?.message}</FieldError>
            </Field>

            <Field>
              <Input
                id="email"
                autoComplete="off"
                placeholder="Email address"
                aria-invalid={!!errors.email}
                {...register("email")}
              />

              <FieldError>{errors.email?.message}</FieldError>
            </Field>

            <Field>
              <Input
                id="phone"
                autoComplete="off"
                placeholder="Phone number"
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />

              <FieldError>{errors.phone?.message}</FieldError>
            </Field>

            <Field>
              <Select onValueChange={(value) => setValue("service", value)}>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="des">Design Logo</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="app">App Development</SelectItem>
                </SelectContent>
              </Select>

              <FieldError>{errors.service?.message}</FieldError>
            </Field>

            <Field>
              <Textarea
                placeholder="Type your message here"
                aria-invalid={!!errors.message}
                {...register("message")}
              />

              <FieldError>{errors.message?.message}</FieldError>
            </Field>

            <Button type="submit">Send message</Button>
          </FieldGroup>
        </FieldSet>
      </form>

      <div className="flex flex-col gap-2">
        {info.map(({ icon: Icon, name, value }) => (
          <div key={name} className="flex gap-2 items-center">
            <div className="bg-primary p-2 rounded-md text-accent">
              <Icon size={30} />
            </div>

            <div className="flex flex-col">
              <label className="text-foreground/70">{name}</label>

              <p className="break-all">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Contact;
