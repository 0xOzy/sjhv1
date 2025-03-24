import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomBinary(length: number): string {
  return Array.from({ length }, () => Math.round(Math.random())).join("");
}

export function getRandomArbitrary(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}

export function updateWithRandomFluctuation(
  baseValue: number,
  fluctuationPercent: number
): number {
  const fluctuation = (Math.random() * 2 - 1) * fluctuationPercent;
  const newValue = baseValue * (1 + fluctuation);
  
  if (Number.isInteger(baseValue)) {
    return Math.round(newValue);
  }
  return Number(newValue.toFixed(1));
}
