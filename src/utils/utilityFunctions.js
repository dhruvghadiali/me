import moment from "moment";
import { appEnv } from "@MEUtils/enums";

export const indianNumberFormate = (value) => {
  const val = Math.abs(value);
  if (val >= 10000000) return `${(value / 10000000).toFixed(2)} C`;
  if (val >= 100000) return `${(value / 100000).toFixed(2)} L`;
  if (val >= 1000) return `${(value / 1000).toFixed(2)} T`;
  return value;
};

export const isUndefinedOrNull = (value) => {
  return value === undefined || value === null;
};

export const isAPIServedSuccessfully = (response) =>
  response.status === 200 || response.status === 201;

export const isMockEnvironment = () => {
  return process.env.NODE_ENV === appEnv.MOCK;
};

export const getMockAPIResponse = async (status, mockFilePath) => {
  const response = await new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        switch (status) {
          case 200:
            resolve(require(`@MEMock/${mockFilePath}/200`).response);
            break;
          case 201:
            resolve(require(`@MEMock/${mockFilePath}/201`).response);
            break;
          case 400:
            resolve(require(`@MEMock/${mockFilePath}/400`).response);
            break;
          case 401:
            resolve(require(`@MEMock/${mockFilePath}/401`).response);
            break;
          case 403:
            resolve(require(`@MEMock/${mockFilePath}/403`).response);
            break;
          case 404:
            resolve(require(`@MEMock/${mockFilePath}/404`).response);
            break;
          case 409:
            resolve(require(`@MEMock/${mockFilePath}/409`).response);
            break;
          case 500:
            resolve(require(`@MEMock/${mockFilePath}/500`).response);
            break;
          case 503:
            resolve(require(`@MEMock/${mockFilePath}/503`).response);
            break;
          default:
            resolve(defaultAPIErrorResponse);
            break;
        }
      } catch (error) {
        reject(defaultAPIErrorResponse);
      }
    }, 2000);
  });

  return response;
};

export const defaultAPIErrorResponse = {
  data: [],
  message: "Something went wrong - Client Side",
  status: 500,
};

export const setUpAxiosInstanceConfig = (state, dispatch) => {
  return { state: state, dispatch: dispatch };
};

/**
 * Helper function to parse date to ISO format
 * @param {Date|string} dateValue - Date to parse
 * @returns {string} ISO format date or empty string
 */
export const parseToISODate = (dateValue, format = "DD MMMM YYYY") => {
  if (!dateValue) return "";
  if (dateValue instanceof Date) {
    return moment(dateValue).toISOString();
  }
  if (typeof dateValue === "string") {
    const momentDate = dateValue.includes("T")
      ? moment(dateValue)
      : moment(dateValue, format);
    return momentDate.isValid() ? momentDate.toISOString() : "";
  }
  return "";
};
