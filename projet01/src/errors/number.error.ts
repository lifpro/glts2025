export class NumberError extends Error {
  constructor(message: string, code: number) {
    super(code + ":" + message);
    this.name = "NumberErrors";
  }
}
