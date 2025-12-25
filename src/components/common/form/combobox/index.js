import React, { useRef } from "react";
import { Check, ChevronDown } from "lucide-react";

import _ from "lodash";

import { Label } from "@MEShadcnComponents/label";
import { ME_COMBOBOX_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import {
  comboboxLabelClassNameByVariant,
  comboboxTriggerClassNameByVariant,
  comboboxMessageClassNameByVariant,
} from "@MECommonComponents/form/combobox/meComboboxClassNameWrapper";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@MEShadcnComponents/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@MEShadcnComponents/popover";

import MEButton from "@MECommonComponents/button/meButton";

const MECombobox = (props) => {
  const {
    label,
    value,
    required,
    onChange,
    onBlur,
    message,
    options = [],
    searchPlaceholder = "Search...",
    disabled = false,
    labelVariant = ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY,
    comboboxVariant = ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY,
    messageVariant = ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [triggerWidth, setTriggerWidth] = React.useState(0);

  const triggerRef = useRef(null);
  const openingRef = useRef(false);

  React.useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="space-y-2">
      <Label className={comboboxLabelClassNameByVariant(labelVariant)}>
        {label} {required && <span className="text-danger">*</span>}
      </Label>
      <Popover
        open={open}
        onOpenChange={(newOpen) => {
          if (newOpen) {
            openingRef.current = true;
          }
          setOpen(newOpen);
          if (!newOpen) {
            onBlur?.();
          }
        }}
      >
        <PopoverTrigger asChild>
          <MEButton
            ref={triggerRef}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            onBlur={() => {
              if (!openingRef.current) {
                onBlur?.();
              }
              openingRef.current = false;
            }}
            className={comboboxTriggerClassNameByVariant(comboboxVariant)}
          >
            <Label className={"w-full font-normal normal-case"}>
              {_.upperFirst(_.toLower(value))}
            </Label>
            <ChevronDown />
          </MEButton>
        </PopoverTrigger>
        <PopoverContent
          className="p-0"
          align="start"
          style={{ width: `${triggerWidth}px` }}
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} className="h-9" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {_.map(options, (option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    {value === option.value && <Check className={"ml-auto"} />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <p
        className={comboboxMessageClassNameByVariant(messageVariant)}
        role="alert"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
};

export default MECombobox;
