import { ME_COMBOBOX_COMPONENT_VARIANTS } from "@MEHelpers/enums";

const comboboxLabelClassNameByVariant = (
  variant = ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_COMBOBOX_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_COMBOBOX_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_COMBOBOX_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_COMBOBOX_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_COMBOBOX_COMPONENT_VARIANTS.DARK]: "dark",
  };

  const color = variantColorMap[variant] || "primary";
  return `text-${color} `;
};

const comboboxTriggerClassNameByVariant = (
  variant = ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_COMBOBOX_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_COMBOBOX_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_COMBOBOX_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_COMBOBOX_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_COMBOBOX_COMPONENT_VARIANTS.DARK]: "dark",
  };
  const color = variantColorMap[variant] || "primary";
  return `w-full border bg-transparent font-normal shadow-xs transition-[color,box-shadow] hover:bg-transparent cursor-pointer border-${color}/80 text-${color} focus-visible:border-${color}/80 focus-visible:ring-${color}/20`;
};

const comboboxMessageClassNameByVariant = (
  variant = ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_COMBOBOX_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_COMBOBOX_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_COMBOBOX_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_COMBOBOX_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_COMBOBOX_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_COMBOBOX_COMPONENT_VARIANTS.DARK]: "dark",
  };
  const color = variantColorMap[variant] || "primary";
  return `mt-2 text-xs text-${color}`
};

export { comboboxLabelClassNameByVariant, comboboxTriggerClassNameByVariant, comboboxMessageClassNameByVariant };
