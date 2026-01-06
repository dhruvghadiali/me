import _ from "lodash";

import { Label } from "@MEShadcnComponents/label";
import { ME_SELECT_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectContent,
  SelectTrigger,
} from "@MEShadcnComponents/select";
import {
  selectLabelClassNameByVariant,
  selectTriggerClassNameByVariant,
  selectMessageClassNameByVariant,
} from "@MECommonComponents/form/select/meSelectClassNameWrapper";

const MESelect = (props) => {
  const {
    label,
    value,
    onBlur,
    message,
    onChange,
    selectLabel,
    disabled = false,
    required = false,
    options = [],
    labelVariant = ME_SELECT_COMPONENT_VARIANTS.PRIMARY,
    selectVariant = ME_SELECT_COMPONENT_VARIANTS.PRIMARY,
    messageVariant = ME_SELECT_COMPONENT_VARIANTS.PRIMARY,
  } = props;

  return (
    <div className="space-y-2">
      <Label className={`${selectLabelClassNameByVariant(labelVariant)}`}>
        {label} {required && <span className="text-danger">*</span>}
      </Label>
      <div className="relative">
        <Select value={value?.toLowerCase()} onValueChange={onChange} disabled={disabled}>
          <SelectTrigger
            disabled={disabled}
            onBlur={onBlur}
            className={selectTriggerClassNameByVariant(selectVariant)}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              <SelectLabel className="text-xs pl-2 pr-8">
                {selectLabel ? selectLabel : "Options"}
              </SelectLabel>
              {_.map(options, (option) => (
                <SelectItem
                  key={option.value}
                  value={option.value.toLowerCase()}
                  className="pl-2 pr-8 [&_span]:right-2 [&_span]:!left-auto"
                >
                  {_.upperFirst(_.toLower(option.label))}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <p
        className={selectMessageClassNameByVariant(messageVariant)}
        role="alert"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
};

export default MESelect;
