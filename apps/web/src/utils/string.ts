import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * An utility function to merge tailwind classes
 * @export
 * @param {...ClassValue[]} inputs
 * @returns {*}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
