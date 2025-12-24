import _ from "lodash";

import { Label } from "@MEShadcnComponents/label";
import { ME_RADIO_BUTTON_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import { RadioGroup, RadioGroupItem } from "@MEShadcnComponents/radio-group";
import {
  radioButtonItemClassNameByVariant,
  radioButtonLabelClassNameByVariant,
  radioButtonMessageClassNameByVariant,
} from "@MECommonComponents/form/radioButton/meRadioButtonClassNameWrapper";

const MERadioButton = (props) => {
  const {
    label,
    value,
    onBlur,
    message,
    onChange,
    radioGroupItems = [],
    disabled = false,
    required = false,
    labelVariant = ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY,
    messageVariant = ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY,
    radioButtonItemVariant = ME_RADIO_BUTTON_COMPONENT_VARIANTS.PRIMARY,
  } = props;

  return (
    <div className="space-y-2">
      <Label className={`${radioButtonLabelClassNameByVariant(labelVariant)}`}>
        {label} {required && <span className="text-danger">*</span>}
      </Label>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        className="flex gap-4"
      >
        {_.map(radioGroupItems, (radioGroupItem, index) => (
          <div
            key={`${label}-${index}`}
            className="flex items-center space-x-2"
          >
            <RadioGroupItem
              value={radioGroupItem.value}
              id={`radio-${label}-${index}`}
              disabled={disabled}
              onBlur={onBlur}
              className={radioButtonItemClassNameByVariant(
                radioButtonItemVariant
              )}
            />
            <Label
              htmlFor={`radio-${label}-${index}`}
              className={`${radioButtonLabelClassNameByVariant(
                labelVariant
              )} cursor-pointer  `}
            >
              {_.upperFirst(_.toLower(radioGroupItem.label))}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <p
        className={radioButtonMessageClassNameByVariant(messageVariant)}
        role="alert"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
};
export default MERadioButton;
