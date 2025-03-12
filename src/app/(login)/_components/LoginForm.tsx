"use client";

import { useForm } from "react-hook-form";
import { Metadata } from "next";
import logo from "@/assets/images/logo.png";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - E-Learning Platform",
  description: "Login to access your courses and profile",
};

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log("data", data);
  };

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <Card className="sm:w-[450px] w-full">
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-3 pb-6">
            <Image
              src={logo}
              alt="Product thumbnail"
              width={1000}
              height={1000}
              className="rounded-lg w-40 h-auto"
            />
            <h1 className="text-3xl font-bold text-[#1D2939]">Hi, Wecome Back! 👋</h1>
            <p className="text-[#475467]">Please enter your email and password below!</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-[#475467]">Email address</label>
              <Input
                className="bg-white !important"
                id="email"
                type="email"
                {...register("email")}
                placeholder="m@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-[#475467]">Password</label>
              <Input
                className="bg-white !important"
                id="password"
                type="password"
                {...register("password")}
              />
            </div>
            <Button type="submit" className="w-full py-5 bg-customBlue hover:bg-customButtonHoverBlue">
              {"Log In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
