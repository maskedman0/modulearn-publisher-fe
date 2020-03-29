export interface ServerResponse<T> {
   statusCode: number;
   success: boolean;
   message: string;
   data: T;
}
