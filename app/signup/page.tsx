"use client";
import React from "react";
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
const schema = z
  .object({
    name: z.string().min(5, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    phone: z
      .string()
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpModal = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:any) => {
    console.log("Form Data:", data);
    // You can add logic to handle the signup here, e.g., API call
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full">
        <Dialog defaultOpen onOpenChange={() => router.back()}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Sign Up
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600">
                Please fill in the following fields to create a new account.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message?.toString()}
                    </span>
                  )}
                </div>
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
                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword" className="font-semibold">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmPassword.message?.toString()}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-md p-2"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      {errors.phone.message?.toString()}
                    </span>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Sign Up
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SignUpModal;
