import { cn } from "@/utils/string";
import React from "react";

export function AbsenceForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div></div>
    </div>
  );
}
