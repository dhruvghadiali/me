import { ME_RADIO_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";

const radioButtonLabelClassNameByVariant = (
  variant = ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.DARK]: "dark",
  };

  const color = variantColorMap[variant] || "primary";
  return `text-${color} `;
};

const radioButtonItemClassNameByVariant = (
  variant = ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.DARK]: "dark",
  };

  const color = variantColorMap[variant] || "primary";
  return `border-${color} text-${color} focus-visible:ring-${color} focus-visible:border-${color} [&_svg]:!h-2 [&_svg]:!w-2`;
};

const radioButtonMessageClassNameByVariant = (
  variant = ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY
) => {
  const variantColorMap = {
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY]: "primary",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.SECONDARY]: "secondary",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.SUCCESS]: "success",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.WARNING]: "warning",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.DANGER]: "danger",
    [ME_RADIO_BUTTON_COMPONENT_VARIANTS.DARK]: "dark",
  };
  const color = variantColorMap[variant] || "primary";
  return `mt-2 text-xs text-${color}`;
};

export {
  radioButtonItemClassNameByVariant,
  radioButtonLabelClassNameByVariant,
  radioButtonMessageClassNameByVariant,
};
