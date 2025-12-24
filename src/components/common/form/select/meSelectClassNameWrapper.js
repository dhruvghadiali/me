import { ME_SELECT_COMPONENT_VARIANTS } from "@MEHelpers/enums";

const selectLabelClassNameByVariant = (variant = ME_SELECT_COMPONENT_VARIANTS.PRIMARY) => {
  const variantColorMap = {
    [ME_SELECT_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_SELECT_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_SELECT_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_SELECT_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_SELECT_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_SELECT_COMPONENT_VARIANTS.DARK]: "dark",
  };

  const color = variantColorMap[variant] || "primary";
  return `text-${color} `;
};

const selectTriggerClassNameByVariant = (
  variant = ME_SELECT_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_SELECT_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_SELECT_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_SELECT_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_SELECT_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_SELECT_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_SELECT_COMPONENT_VARIANTS.DARK]: "dark",
  };

  const color = variantColorMap[variant] || "primary";
  return `border-${color}/80 text-${color} focus-visible:border-${color}/80 focus-visible:ring-${color}/20 [&_svg]:!text-${color} [&_svg]:!opacity-100`;
};

const selectMessageClassNameByVariant = (
  variant = ME_SELECT_COMPONENT_VARIANTS.PRIMARY
) => {  
  const variantColorMap = {
    [ME_SELECT_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_SELECT_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_SELECT_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_SELECT_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_SELECT_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_SELECT_COMPONENT_VARIANTS.DARK]: "dark",
  };
  const color = variantColorMap[variant] || "primary";
  return `mt-2 text-xs text-${color}`;
};

export { selectLabelClassNameByVariant, selectTriggerClassNameByVariant, selectMessageClassNameByVariant };