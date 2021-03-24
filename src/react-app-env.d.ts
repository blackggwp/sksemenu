/// <reference types="react-scripts" />

interface MenuProps {
  brandid: string;
  brandtype: string;
}

interface RouteParamTypes {
  brandid: string;
  brandtype: string;
  manualid: string;
}

interface GlobalTypes {
  apiServer: string;
}

interface ImageProps {
  imgUrl: Array<string>;
}
