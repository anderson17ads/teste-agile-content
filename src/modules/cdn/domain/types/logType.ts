export type LogType = {
  provider: string;
  httpMethod: string;
  statusCode: number;
  uriPath: string;
  timeTaken: number;
  reponseSize: number;
  cacheStatus: string;
}