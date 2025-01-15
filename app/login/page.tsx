"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

// Zod schema for validation
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginModal = () => {
  const router = useRouter();
  const [loginCompleted, setLoginCompleted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // You can add logic to handle the login here, e.g., API call
    setLoginCompleted(true);
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full">
        <Dialog defaultOpen onOpenChange={() => router.back()}>
          <DialogContent className="sm:max-w-[425px] ">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Login
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                Please enter your email and password to log in.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="font-semibold">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Login
                </Button>
              </DialogFooter>
              {loginCompleted && (
                <p className="text-center text-green-500">Login completed</p>
              )}
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default LoginModal;
