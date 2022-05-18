import { checkForUnauthorizedResponse } from '../../utils/axios';
import customFetch from '../../utils/axios';

export const showStatsThunk = async (_, thunkApi) => {
  try {
    const resp = await customFetch.get('/jobs/stats');
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkApi);
  }
};

export const getAllJobsThunk = async (_, thunkApi) => {
  const { page, search, searchType, sort, searchStatus } =
    thunkApi.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkApi);
  }
};
