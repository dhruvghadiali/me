import _ from "lodash";

const schoolSummaryAPIResponse = (response) => {
  if (response && response.data && _.size(response.data) > 0) {
    return _.map(response.data, (school) => {
      return {
        id: school.id,
        name: school.name,
        email: school.email,
        phoneNumber: school.phone_number,
        address:
          school.school_address && _.size(school.school_address) > 0
            ? _.join(
                _.compact([
                  school.school_address[0].address,
                  school.school_address[0].area_name,
                  school.school_address[0].city,
                  school.school_address[0].district,
                  school.school_address[0].state,
                ]),
                ", "
              ) +
              (school.school_address[0].zipcode
                ? (_.some([
                    school.school_address[0].address,
                    school.school_address[0].area_name,
                    school.school_address[0].city,
                    school.school_address[0].district,
                    school.school_address[0].state,
                  ])
                    ? " - "
                    : "") + school.school_address[0].zipcode
                : "")
            : "",
      };
    });
  } else {
    return [];
  }
};

export { schoolSummaryAPIResponse };
