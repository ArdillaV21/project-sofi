import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases dinámicas de TailwindCSS y las fusiona sin conflictos.
 * @param inputs Clases dinámicas a combinar.
 * @returns Una cadena con las clases combinadas.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
