import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function classnames(...inputs) {
  return twMerge(clsx(inputs))
}