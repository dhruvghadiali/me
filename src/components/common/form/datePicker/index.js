import { useMemo, useState, useRef } from "react";
import { format, isValid as isValidDate} from "date-fns";

import { CalendarIcon } from "lucide-react";
import { Label } from "@MEShadcnComponents/label";
import { Calendar } from "@MEShadcnComponents/calendar";
import { ME_DATEPICKER_COMPONENT_VARIANTS } from "@MEHelpers/enums/variantsEnum";
import { 
  datePickerLabelClassNameByVariant,
  datePickerButtonClassNameByVariant,
  datePickerMessageClassNameByVariant,
} from "@MECommonComponents/form/datePicker/meDatePickerClassNameWrapper";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@MEShadcnComponents/popover";

import MEButton from "@MECommonComponents/button/meButton";

import "react-day-picker/dist/style.css";

// MEDatePicker: single-date input with popover calendar
const MEDatePicker = (props) => {
  const {
    label,
    onBlur,
    message,
    required,
    disabled,
    fromDate,
    onSelect,
    defaultDate,
    selectedDate,
    displayDateFormate,
    popoverModal = true,
    placeholder = "DD/MM/YYYY",
    useDefaultAsSelected = true,
    labelVariant = ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY,
    buttonVariant = ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY,
    messageVariant = ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY,
  } = props;

  const [open, setOpen] = useState(false);
  const [placeholderTextColor, setPlaceholderTextColor] = useState(
    "text-muted-foreground"
  );
  const openingRef = useRef(false);

  const normalizeFormat = (fmt) => {
    if (!fmt) return "dd MMM yyyy";
    return fmt.replaceAll("DD", "dd").replaceAll("YYYY", "yyyy");
  };

  const toDate = (val) => {
    if (!val) return undefined;
    if (val instanceof Date) return isValidDate(val) ? val : undefined;
    const d = new Date(val);
    return isValidDate(d) ? d : undefined;
  };

  const selected = useMemo(() => toDate(selectedDate), [selectedDate]);
  const defDate = useMemo(() => toDate(defaultDate), [defaultDate]);
  const minDate = useMemo(() => toDate(fromDate), [fromDate]);
  const disabledDays = useMemo(
    () => (minDate ? [{ before: minDate }] : undefined),
    [minDate]
  );

  const effectiveForDisplay = selected || defDate;
  const displayText = effectiveForDisplay
    ? format(effectiveForDisplay, normalizeFormat(displayDateFormate))
    : placeholder;

  return (
    <div className="space-y-2">
      {label && (
        <Label className={datePickerLabelClassNameByVariant(labelVariant)}>
          {label} {required && <span className="text-danger">*</span>}
        </Label>
      )}
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
        modal={popoverModal}
      >
        <PopoverTrigger asChild>
          <MEButton
            disabled={disabled}
            onBlur={() => {
              if (!openingRef.current) {
                onBlur?.();
              }
              openingRef.current = false;
            }}
            className={datePickerButtonClassNameByVariant(buttonVariant)}
          >
            <span className="text-left truncate w-full">{displayText}</span>
            <CalendarIcon className="ml-2 h-4 w-4 text-dark" />
          </MEButton>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          side="bottom"
          sideOffset={8}
          className="z-50 w-auto p-4 bg-popover border border-border rounded-md shadow-lg"
        >
          <Calendar
            classNames={{
              today: "bg-danger/20 text-danger ring-1 ring-danger ",
              selected: "bg-primary text-danger-foreground",
            }}
            mode="single"
            captionLayout="dropdown"
            disabled={disabledDays}
            selected={selected || (useDefaultAsSelected ? defDate : undefined)}
            onSelect={(date) => {
              setPlaceholderTextColor(
                isValidDate(date) ? "text-foreground" : "text-muted-foreground"
              );
              onSelect?.(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {message && (
        <p className={datePickerMessageClassNameByVariant(messageVariant)} role="alert" aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
};

export default MEDatePicker;
