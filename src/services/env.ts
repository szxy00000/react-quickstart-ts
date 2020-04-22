export class Env {
  static env = process.env.D_ENV;

  static isDev = Env.env === 'development';
  static isTest = Env.env === 'test';
  static isProduction = Env.env === 'production';
  static isPre = Env.env === 'pre';

  static isProd = Env.isProduction || Env.isPre;

  static isIframe = window.self !== window.top;
}
