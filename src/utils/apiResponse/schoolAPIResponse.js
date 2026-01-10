import _ from "lodash";

/**
 * Transform flat facilities array into grouped structure by facility_type
 * Input: [{ facility: { facility_type: {...}, facility_name: "..." }, ... }]
 * Output: [{ facilityType: "...", facility: [{ facilityName: "...", ... }] }, ...]
 */
const transformFacilitiesData = (facilitiesArray) => {
  if (!facilitiesArray || !_.size(facilitiesArray)) {
    return [];
  }

  // Group by facility_type
  const groupedByType = _.groupBy(facilitiesArray, (item) => {
    return _.get(item, "facility.facility_type._id");
  });

  // Transform into desired structure
  return _.map(groupedByType, (facilities, facilityTypeId) => {
    const firstFacility = facilities[0];
    const facilityType = _.get(firstFacility, "facility.facility_type");

    return {
      _id: facilityType?._id || facilityTypeId,
      facilityType: facilityType?.facility_type || null,
      id: facilityType?.id || facilityTypeId,
      facility: _.map(facilities, (item) => {
        const facility = _.get(item, "facility");
        return {
          _id: facility?._id || null,
          facilityName: facility?.facility_name || null,
          id: facility?.id || null,
        };
      }),
    };
  });
};

const transformAcademicClassesData = (school) => {
  let academicClasses = [];
  let fees = [];
  let admissionDocuments = [];

  if (
    school &&
    school.school_academic_class &&
    !_.isEmpty(school.school_academic_class)
  ) {
    for (let index = 0; index < school.school_academic_class.length; index++) {
      const academicClass = school.school_academic_class[index];
      academicClasses.push({
        educationBoard: academicClass?.education_board || null,
        academicClass: academicClass?.academic_class?.academic_class || null,
        students: null,
        classes: null,
        avgSize: null,
        campusName: null,
      });
      fees.push({
        educationBoard: academicClass?.education_board || null,
        academicClass: academicClass?.academic_class?.academic_class || null,
        totalMonthlyFee:
          academicClass && academicClass.school_fees
            ? _.sumBy(academicClass.school_fees, (fee) =>
                fee?.monthly_fee ? parseFloat(fee.monthly_fee) : 0
              )
            : 0,
        totalQuarterlyFee:
          academicClass && academicClass.school_fees
            ? _.sumBy(academicClass.school_fees, (fee) =>
                fee?.quarterly_fee ? parseFloat(fee.quarterly_fee) : 0
              )
            : 0,
        totalHalfYearlyFee:
          academicClass && academicClass.school_fees
            ? _.sumBy(academicClass.school_fees, (fee) =>
                fee?.half_yearly_fee ? parseFloat(fee.half_yearly_fee) : 0
              )
            : 0,
        totalYearlyFee:
          academicClass && academicClass.school_fees
            ? _.sumBy(academicClass.school_fees, (fee) =>
                fee?.yearly_fee ? parseFloat(fee.yearly_fee) : 0
              )
            : 0,
        feeStructure:
          academicClass &&
          academicClass.school_fees &&
          _.size(academicClass.school_fees) > 0
            ? _.map(academicClass.school_fees, (fee) => ({
                feeType: fee?.fee_type?.fee_type || null,
                monthlyFee: fee?.monthly_fee || null,
                quarterlyFee: fee?.quarterly_fee || null,
                halfYearlyFee: fee?.half_yearly_fee || null,
                yearlyFee: fee?.yearly_fee || null,
              }))
            : [],
      });
    }
  }

  return {
    academicClasses,
    fees,
    admissionDocuments,
  };
};

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

const schoolDetailsAPIResponse = (response) => {
  if (response && response.data && _.size(response.data) > 0) {
    const school = response.data[0];
    return {
      id: school.id,
      name: school.name,
      email: school.email,
      phoneNumber: school.phone_number,
      affiliateNumber: school.affiliate_number,
      establishedYear: school.established_year,
      schoolType: school.school_type ? school.school_type.school_type : "",
      educationBoardsDropdown: _.map(
        school.education_boards,
        (educationBoard) => ({
          value: educationBoard.id,
          label: educationBoard.education_board,
        })
      ),
      educationBoards: _.join(
        _.map(school.education_boards, (board) =>
          _.capitalize(board.education_board)
        ),
        ", "
      ),
      overview: {
        aboutSection1: null,
        aboutSection2: null,
        studentsEnrolled: null,
        facultyMembers: null,
        graduationRate: null,
        schoolRating: null,
      },
      organization: (() => {
        const organization = _.get(school, "organization", {});
        const formatPhone = (phoneNumber) =>
          phoneNumber ? `+91 ${phoneNumber}` : null;
        const members = _.map(
          _.get(organization, "organization_members", []),
          (member) => ({
            position: _.upperFirst(member?.position) || "N/A",
            name:
              _.trim(
                [
                  _.upperFirst(member?.first_name || ""),
                  _.upperFirst(member?.last_name || ""),
                ].join(" ")
              ) || "N/A",
            phoneNumber: member?.phone_number
              ? formatPhone(member.phone_number)
              : "N/A",
            email: member?.email || "N/A",
          })
        );

        const addressLine1 = (() => {
          const address = _.get(organization, "address");
          const areaName = _.get(organization, "area_name.name");
          const value = _.join(
            _.compact([_.upperFirst(address), areaName]),
            ", "
          );
          return value || null;
        })();

        const addressLine2 = (() => {
          const city = _.get(organization, "city.name");
          const district = _.get(organization, "district.name");
          const state = _.get(organization, "state.name");
          const zipcode = _.get(organization, "zipcode.zipcode");
          let value = _.join(
            _.compact([
              _.upperFirst(city),
              _.upperFirst(district),
              _.upperFirst(state),
            ]),
            ", "
          );
          if (zipcode) value += (value ? " - " : "") + zipcode;
          return value || null;
        })();

        return {
          name: organization.name || null,
          governmentRegistrationNumber:
            organization.government_registration_number || null,
          email: organization.email || null,
          phoneNumber: formatPhone(organization.phone_number),
          members,
          addressLine1,
          addressLine2,
        };
      })(),
      addresses:
        school && school.school_address && _.size(school.school_address) > 0
          ? _.map(school.school_address, (schoolAddress) => {
              const addressLine1 = (() => {
                const address = _.get(schoolAddress, "address");
                const areaName = _.get(schoolAddress, "area_name.name");
                const value = _.join(
                  _.compact([_.upperFirst(address), areaName]),
                  ", "
                );
                return value || null;
              })();

              const addressLine2 = (() => {
                const city = _.get(schoolAddress, "city.name");
                const district = _.get(schoolAddress, "district.name");
                const state = _.get(schoolAddress, "state.name");
                const zipcode = _.get(schoolAddress, "zipcode.zipcode");
                let value = _.join(
                  _.compact([
                    _.upperFirst(city),
                    _.upperFirst(district),
                    _.upperFirst(state),
                  ]),
                  ", "
                );
                if (zipcode) value += (value ? " - " : "") + zipcode;
                return value || null;
              })();

              return {
                addressLine1,
                addressLine2,
              };
            })
          : [],
      academicClasses: transformAcademicClassesData(school).academicClasses,
      fees: transformAcademicClassesData(school).fees,
      admissionDocuments:
        transformAcademicClassesData(school).admissionDocuments,
      facilities:
        school && school.school_facility && _.size(school.school_facility) > 0
          ? transformFacilitiesData(school.school_facility)
          : [],
    };
  } else {
    return {};
  }
};

export { schoolSummaryAPIResponse, schoolDetailsAPIResponse };
