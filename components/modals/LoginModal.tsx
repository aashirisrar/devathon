"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Modal from "@/components/modals/Modal";
import Heading from "@/components/HeroHeading";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import ButtonRed from "@/components/ButtonRed";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

const LoginModal = () => {
  const router = useRouter();

  const registerModal = useRegisterModal();
  const LoginModal = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().includes("@", { message: "Enter a valid email address" }),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.error) {
        toast.error("Invalid Credentials");
        return;
      }

      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        LoginModal.onClose();
        return;
      }
    });
  };

  const toggle = useCallback(() => {
    LoginModal.onClose();
    registerModal.onOpen();
  }, [LoginModal, registerModal]);

  const description = (
    <Heading center title="Welcome back" subtitle="Login to your account!" />
  );

  const bodyContent = (
    <Form {...form}>
      <form className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={isLoading} required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  disabled={isLoading}
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <ButtonRed
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <ButtonRed
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div
        className="text-neutral-500 text-center
      mt-4 font-light"
      >
        <div className="justify-center flex md:flex-row flex-col items-center gap-2">
          <div>First time using Portfolio?</div>
          <div
            onClick={toggle}
            className="text-neutral-800
          cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={LoginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={LoginModal.onClose}
      onSubmit={form.handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
      description={description}
    />
  );
};

export default LoginModal;
