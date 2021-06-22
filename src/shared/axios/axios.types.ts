import { AxiosRequestConfig } from 'axios';

type AxiosRequestAction = string;

type AxiosRequestTypes = {
    success: AxiosRequestAction;
    fail: AxiosRequestAction;
}

export class AxiosActionRequest {
    type: AxiosRequestAction;

    config: AxiosRequestConfig;

    actionTypes: AxiosRequestTypes;

    public constructor(data: Partial<AxiosActionRequest>) {
      Object.assign(this, data);
    }
}
