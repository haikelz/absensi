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
import { absenceSchema } from "@/utils/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function AbsenceForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      nim: "",
    },
    resolver: zodResolver(absenceSchema),
  });

  function onSubmit() {}

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Absensi Perpustakaan</CardTitle>
          <CardDescription>
            Silahkan absen terlebih dahulu saat masuk perpustakaan!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Kampus *</Label>
                <Input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Masukkan Email Kampus"
                  required
                />
                {errors.email ? (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="nim">Nomor Induk Mahasiswa(NIM) *</Label>
                <Input
                  {...register("nim")}
                  id="nim"
                  name="nim"
                  type="text"
                  placeholder="Contoh: 2111500068"
                  required
                />
                {errors.nim ? (
                  <span className="text-xs text-red-500">
                    {errors.nim.message}
                  </span>
                ) : null}
              </div>
              <Button type="submit" className="w-full font-bold">
                Absen
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
