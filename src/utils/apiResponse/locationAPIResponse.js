import _ from "lodash";

/**
 * Transform nested location structure into flattened arrays
 * @param {Array} statesArray - Array of state objects with nested districts, cities, etc.
 * @returns {Object} Object with flattened states, districts, cities, areaNames, and zipcodes arrays
 */
const flattenLocationData = (statesArray) => {
  const result = {
    states: [],
    districts: [],
    cities: [],
    areaNames: [],
    zipcodes: [],
  };

  if (!_.isArray(statesArray) || _.isEmpty(statesArray)) {
    return result;
  }

  _.forEach(statesArray, (state) => {
    const stateId = _.get(state, "id");
    const stateName = _.get(state, "name");

    // Add state
    result.states.push({
      id: stateId,
      name: stateName,
      label: stateName,
      value: stateId,
    });

    // Process districts
    _.forEach(_.get(state, "districts", []), (district) => {
      const districtId = _.get(district, "id");
      const districtName = _.get(district, "name");

      result.districts.push({
        id: districtId,
        state: stateId,
        name: districtName,
        label: districtName,
        value: districtId,
      });

      // Process cities
      _.forEach(_.get(district, "cities", []), (city) => {
        const cityId = _.get(city, "id");
        const cityName = _.get(city, "name");

        result.cities.push({
          id: cityId,
          state: stateId,
          district: districtId,
          name: cityName,
          label: cityName,
          value: cityId,
        });

        // Process area names
        _.forEach(_.get(city, "area_names", []), (area) => {
          const areaId = _.get(area, "id");
          const areaName = _.get(area, "name");

          result.areaNames.push({
            id: areaId,
            state: stateId,
            district: districtId,
            city: cityId,
            name: areaName,
            label: areaName,
            value: areaId,
          });

          // Process zipcodes
          _.forEach(_.get(area, "zipcodes", []), (zipcode) => {
            const zipcodeId = _.get(zipcode, "id");
            const zipcodeValue = _.get(zipcode, "zipcode");

            result.zipcodes.push({
              id: zipcodeId,
              state: stateId,
              district: districtId,
              city: cityId,
              areaName: areaId,
              zipcode: zipcodeValue,
              label: zipcodeValue,
              value: zipcodeId,
            });
          });
        });
      });
    });
  });

  return result;
};

export { flattenLocationData };
