"use client";

import useGetAllRegions from "@/app/hooks/regions/useGetAllRegions";
import TUserRegisterSchema from "@/app/register/schemas/TUserRegisterSchema";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

const RegCodeField = ({ field }: { field: ControllerRenderProps<TUserRegisterSchema> }) => {
  const { data: regions } = useGetAllRegions();
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<string>("");

  return (
    <>
      <FormLabel>REGION</FormLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {region
              ? regions.find((reg: TRegion) => reg.regDesc === region)?.regDesc
              : "Select Region..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[400px] p-0">
          <Command>
            <CommandInput placeholder="Search Region..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Region Found.</CommandEmpty>
              <CommandGroup>
                {regions?.map((reg: TRegion, index: number) => (
                  <CommandItem
                    key={index}
                    value={reg.regDesc}
                    onSelect={(currentValue) => {
                      const selectedRegion = regions.find(
                        (reg: TRegion) => reg.regDesc === currentValue
                      );
                      if (selectedRegion) {
                        setRegion(selectedRegion.regDesc); // Update local region state
                        field.onChange(selectedRegion.regCode); // Update react-hook-form field value
                      }
                      setOpen(false);
                    }}
                  >
                    {reg.regDesc}
                    <Check
                      className={cn(
                        "ml-auto",
                        region === reg.regDesc ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </>
  );
};

export default RegCodeField;
