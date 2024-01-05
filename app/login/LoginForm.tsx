"use client";

import { Fragment, useState } from "react";
import Headline from "../components/Headline";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Giriş yapıldı");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <Fragment>
      <Headline title="Giriş Yap" />
      <Button
        outline
        label="Google ile giriş yap"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Şifre"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "Giriş Yap"}
        onClick={() => handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Hesabın yok mu?
        <Link className="underline" href="/register">
          Kayıt Ol
        </Link>
      </p>
    </Fragment>
  );
};

export default LoginForm;
