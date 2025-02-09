"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/string";
import { signInAdminSchema } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(signInAdminSchema),
  });

  function onSubmit() {}

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>Silahkan Sign In sebagai admin!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username *</Label>
                <Input
                  {...register("username")}
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username...."
                  required
                />
                {errors.username ? (
                  <span className="text-xs text-red-500">
                    {errors.username.message}
                  </span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="nim">Password *</Label>
                <Input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="text"
                  placeholder="Password...."
                  required
                />
                {errors.password ? (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                ) : null}
              </div>
              <Button type="submit" className="w-full font-bold">
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
