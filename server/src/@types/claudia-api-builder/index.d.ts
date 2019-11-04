declare module 'claudia-api-builder' {
  export interface CallbackRequestInterface {
    pathParameters: PathParametersInterface;
  }
  export interface PathParametersInterface {
    id: string;
  }

  class ApiResponse {
    public constructor(response: any, headers: any, code?: any);
  }

  export default class ApiBuilder {
    public static ApiResponse: typeof ApiResponse;

    get(uri: string, callback: (request: CallbackRequestInterface) => void): void;
    put(uri: string, callback: Function): void;
    post(uri: string, callback: Function): void;
  }
}
