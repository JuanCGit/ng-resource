export interface IImageResponse {
  created: number;
  data: ISingleImageResponse[];
}

interface ISingleImageResponse {
  url: string;
}
