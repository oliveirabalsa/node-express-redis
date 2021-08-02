import Redis from "ioredis";

class Cache {
  private redis;
  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || "localhost",
      port: Number(process.env.REDIS_PORT) || 6379,
      keyPrefix: "cache:",
    });
  }

  async get(key: string) {
    const value = await this.redis.get(key);

    return value ? JSON.parse(value) : null;
  }

  async set(key: string, value: string, timeExp: number) {
    return this.redis.set(key, JSON.stringify(value), "EX", timeExp);
  }

  del(key: string) {
    return this.redis.del(key);
  }

  async delPrefix(prefix: string) {
    const keys = (await this.redis.keys(`${prefix}:*`)).map((key) =>
      key.replace("chache: ", "")
    );

    return this.redis.del(keys);
  }
}

export default new Cache();
