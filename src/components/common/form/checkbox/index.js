import _ from "lodash";

import { Input } from "@MEShadcnComponents/input";
import { Label } from "@MEShadcnComponents/label";
import { ME_CHECKBOX_COMPONENT_VARIANTS } from "@MEHelpers/enums";
import {
  checkboxClassNameByVariant,
  checkboxLabelClassNameByVariant,
  checkboxMessageClassNameByVariant,
  checkboxInputLabelClassNameByVariant,
} from "@MECommonComponents/form/checkbox/meCheckboxClassNameWrapper";

// Helper function to get dynamic grid columns based on checkboxList length
const getGridColumnsClass = (listLength) => {
  if (listLength === 0) return "grid-cols-1";
  if (listLength === 1) return "grid-cols-1";
  if (listLength === 2) return "grid-cols-1 sm:grid-cols-2";
  if (listLength === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
};

const MECheckbox = (props) => {
  const {
    required,
    label,
    message,
    onChange,
    disabled = false,
    checkboxList = [],
    labelVariant = ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY,
    checkboxVariant = ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY,
    messageVariant = ME_CHECKBOX_COMPONENT_VARIANTS.PRIMARY,
  } = props;

  const gridClass = getGridColumnsClass(checkboxList.length);

  return (
    <div className="space-y-2">
      <Label className={`${checkboxLabelClassNameByVariant(labelVariant)}`}>
        {label} {required && <span className="text-danger">*</span>}
      </Label>
      <div className={`grid ${gridClass} gap-3`}>
        {_.map(checkboxList, (checkboxItem, index) => (
          <div className="flex items-center" key={index}>
            <Input
              type="checkbox"
              id={`checkbox-${checkboxItem?.label}-${index}`}
              name={`checkbox-${checkboxItem?.label}-${index}`}
              checked={checkboxItem?.isSelected || false}
              className={checkboxClassNameByVariant(checkboxVariant)}
              disabled={disabled}
              onChange={(e) => {
                let tempCheckboxList = checkboxList;

                let index = _.findIndex(
                  tempCheckboxList,
                  (item) => item.label === checkboxItem.label
                );
                if (index !== -1) {
                  tempCheckboxList[index].isSelected = !tempCheckboxList[index].isSelected;
                }
                onChange(tempCheckboxList);
              }}
            />
            <Label
              htmlFor={`checkbox-${checkboxItem?.label}-${index}`}
              className={checkboxInputLabelClassNameByVariant(checkboxVariant)}
            >
              {checkboxItem?.label || "N/A"}
            </Label>
          </div>
        ))}
      </div>
      <p
        className={checkboxMessageClassNameByVariant(messageVariant)}
        role="alert"
        aria-live="polite"
      >
        {message}
      </p>
    </div>
  );
};

export default MECheckbox;
