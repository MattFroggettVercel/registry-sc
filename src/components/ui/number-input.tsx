"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NumberInputProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string; // Added className prop
}

export function NumberInput({
  defaultValue = 0,
  min,
  max,
  step = 1,
  onChange,
  className,
}: NumberInputProps) {
  const [value, setValue] = useState(defaultValue);

  const handleIncrement = () => {
    const newValue = value + step;
    if (max === undefined || newValue <= max) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (min === undefined || newValue >= min) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value) || 0;
    if (
      (min === undefined || newValue >= min) &&
      (max === undefined || newValue <= max)
    ) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {" "}
      {/* Added className support with cn utility */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={min !== undefined && value <= min}
        className="h-10 w-10 rounded-md bg-transparent"
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Decrease value</span>
      </Button>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        className="w-20 text-center"
        min={min}
        max={max}
        step={step}
      />
      <Button
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={max !== undefined && value >= max}
        className="h-10 w-10 rounded-md"
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Increase value</span>
      </Button>
    </div>
  );
}
