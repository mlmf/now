class Now {
  constructor(now) {
    this.now = now ? new Date('' + now) : new Date();
  }

  fullYear() {
    return this.now.getFullYear();
  }
}

export default Now;

