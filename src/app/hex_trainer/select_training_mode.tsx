'use client'

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState }from 'react';
import { cn } from "@/lib/utils"

enum Training {
    HEX_TO_DEC = "Convert Hexadecimal to Decimal",
    DEC_TO_HEX = "Convert Decimal to Hexadecimal",
    SOLVE_EQ = "Solve an Equation with Hexadecimal Operators",
};

const SelectTrainingMode = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [selectedTraining, setSelectedTraining] = useState<string>("");
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedTraining || "Select training mode..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {Object.values(Training).map((training) => (
                  <CommandItem
                    key={training}
                    value={training}
                    onSelect={(currentValue) => {
                        console.log({currentValue, training, selectedTraining })
                        setSelectedTraining(currentValue === selectedTraining ? "" : currentValue)
                        setOpen(false)
                    }}
                  >
                    {training}
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedTraining === training ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }

export default SelectTrainingMode;