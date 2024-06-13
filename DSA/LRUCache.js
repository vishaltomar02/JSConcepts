
// This is a JavaScript coding problem from BFE.dev 

/**
 * @typedef {object} OriginData
 * @property {string} origin
 * @property {number} lastUsed
 * @property {number} size
 * @property {boolean} persistent
 */
class MyLRUStorage {
  /**
   * @param {number} capacity
   * @param {() => number} getTimestamp
   */
  constructor(capacity, getTimestamp) {
    this.capacity = capacity
    this.getTimestamp = getTimestamp
    this.cacheMap = new Map();
  }

  /**
   * @param {string} origin
   * @returns {OriginData | undefined}
   */
  getData(origin) {
    if (!this.cacheMap.has(origin)) return undefined;
    const data = this.cacheMap.get(origin);
    // deleting the origin data from current position and pushing it again in map
    // this will add the accessed origin data to the end.(most recently used here)
    this.cacheMap.delete(origin);
    this.cacheMap.set(origin, { ...data, lastUsed: Date().now });
    return data;
  }
  /**
   * @param {string} origin
   * @param {number} size
   * @returns {boolean}
   */
  setData(origin, size) {
    let totalCacheOccupied = 0;
    if (this.capacity < size) return false;
    this.clearData(origin);
    this.cacheMap.forEach((value, key) => {
      totalCacheOccupied += value.size
    });
    if (this.capacity < totalCacheOccupied + size) {
      const cacheEntries = this.cacheMap.entries();
      console.log(cacheEntries);
      for (let [key, value] of cacheEntries) {
        console.log("inside for loop", totalCacheOccupied)
        if (!value.persistent) {
          this.clearData(key)
          totalCacheOccupied -= value.size;
        }
        console.log(this.capacity, totalCacheOccupied, size)
        if (this.capacity >= totalCacheOccupied + size) {
          console.log("ready to add")
          this.cacheMap.set(origin, {
            origin,
            size,
            lastUsed: Date.now(),
            persistent: false
          });
          return true;
        }
      }
      return false;
    }
    else {
      this.cacheMap.set(origin, {
        origin,
        size,
        lastUsed: Date.now(),
        persistent: false
      });
      console.log("Final MAp", this.cacheMap)
      return true;
    }
  }

  /**
   * @param {string} origin
   * @returns {void}
   */
  clearData(origin) {
    if (this.cacheMap.has(origin)) {
      this.cacheMap.delete(origin);
    }
  }

  /**
   * @param {string} origin
   * @returns {void}
   */
  makePersistent(origin) {
    if (this.cacheMap.has(origin)) {
      let originData = this.cacheMap.get(origin);
      originData.persistent = true;
    }
  }
}