/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.less' {
  declare const css: {
    [key: string]: string;
  };
  export default css;
}
