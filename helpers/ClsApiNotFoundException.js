class ClsApiNotFoundException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'ClsApiNotFoundException';
  }
}
