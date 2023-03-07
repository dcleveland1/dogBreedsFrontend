export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
}
export interface ResponseData {
  status: string;
  message: any;
}


export type RequestMethod = keyof typeof HTTP_METHODS