"use client";

import { Fragment, useEffect, useState } from "react";
import Headline from "../components/Headline";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFormProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Hesap oluşturuldu");
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Giriş yapıldı");
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Bir şeyler yanlış gitti"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (currentUser) {
    return (
      <p className="text-center">Giriş yapıldı. Yönlendirme yapılıyor...</p>
    );
  }

  return (
    <Fragment>
      <Headline title="Kayıt Ol" />
      <Button
        outline
        label="Google ile devam et"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="İsim"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
        label={isLoading ? "Loading" : "Kayıt Ol"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Zaten bir hesabın var mı?{" "}
        <Link className="underline" href="/login">
          Giriş Yap
        </Link>
      </p>
    </Fragment>
  );
};

export default RegisterForm;
