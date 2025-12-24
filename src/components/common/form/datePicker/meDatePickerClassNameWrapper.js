import { ME_DATEPICKER_COMPONENT_VARIANTS } from "@MEHelpers/enums";

const datePickerLabelClassNameByVariant = (variant = ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY) => {
   const variantColorMap = {
    [ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_DATEPICKER_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_DATEPICKER_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_DATEPICKER_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_DATEPICKER_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_DATEPICKER_COMPONENT_VARIANTS.DARK]: "dark",
  };
  const color = variantColorMap[variant] || "primary";
  return `text-${color} `;
};

const datePickerButtonClassNameByVariant = (buttonVariant = ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY) => {
  const variantColorMap = {
    [ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_DATEPICKER_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_DATEPICKER_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_DATEPICKER_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_DATEPICKER_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_DATEPICKER_COMPONENT_VARIANTS.DARK]: "dark",
  };
  const color = variantColorMap[buttonVariant] || "primary";
  return `w-full border bg-transparent font-normal shadow-xs transition-[color,box-shadow] hover:bg-transparent cursor-pointer border-${color}/80 text-${color} focus-visible:border-${color}/80 focus-visible:ring-${color}/20`;
};

const datePickerMessageClassNameByVariant = (messageVariant = ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY) => {
    const variantColorMap = {
        [ME_DATEPICKER_COMPONENT_VARIANTS.PRIMARY]: "primary",
        [ME_DATEPICKER_COMPONENT_VARIANTS.SECONDARY]: "secondary",
        [ME_DATEPICKER_COMPONENT_VARIANTS.SUCCESS]: "success",
        [ME_DATEPICKER_COMPONENT_VARIANTS.WARNING]: "warning",
        [ME_DATEPICKER_COMPONENT_VARIANTS.DANGER]: "danger",
        [ME_DATEPICKER_COMPONENT_VARIANTS.DARK]: "dark",
    };
    const color = variantColorMap[messageVariant] || "primary";
    return `mt-2 text-xs text-${color}`;
};

export { datePickerLabelClassNameByVariant, datePickerButtonClassNameByVariant, datePickerMessageClassNameByVariant };