declare module 'claudia-api-builder' {
  export interface CallbackRequestInterface {
    pathParams: { id: string };
  }
  export interface ResponseObjectInterface {
    success: number;
    error: number;
  }

  class ApiResponse {
    public constructor(response: any, headers: any, code?: any);
  }

  export default class ApiBuilder {
    public static ApiResponse: typeof ApiResponse;

    get(
      uri: string,
      callback: (request: CallbackRequestInterface) => void,
      responseObject?: ResponseObjectInterface
    ): void;
    put(uri: string, callback: Function): void;
    post(uri: string, callback: Function, responseObject: ResponseObjectInterface): void;
    delete(uri: string, callback: Function, responseObject: ResponseObjectInterface): void;
  }
}
