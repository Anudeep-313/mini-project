export class LocalStorage {
  constructor (version, name, defaultContent) {
    this.version = version
    this.name = name
    this.storageName = `${this.version}-${this.name}`
    this.#createStorage(defaultContent)
  }

  // create a storare if no exist before
  #createStorage (defaultContent = {}) {
    window.localStorage.setItem(this.storageName, JSON.stringify(defaultContent))
  }

  // return all content of storage
  getAllStorage () {
    const JSON_STORAGE = window.localStorage.getItem(this.storageName)
    return JSON.parse(JSON_STORAGE)
  }

  // return a single item from key
  getItem (item) {
    const JSON_STORAGE = window.localStorage.getItem(this.storageName)
    const parceStorage = JSON.parse(JSON_STORAGE)
    return parceStorage[item]
  }

  // change a single item
  setItem (key, item) {
    const newContentStorage = this.getAllStorage()
    newContentStorage[key] = item
    window.localStorage.setItem(this.storageName, JSON.stringify(content))
  }

  // add a item into the other item
  addItem (key, item) {
    const newContentStorage = this.getAllStorage()
    newContentStorage[key].push(item)
    window.localStorage.setItem(this.storageName, JSON.stringify(content))
  }

  // delete a specific item
  delteItem (key, item) {
    const newContentStorage = this.getAllStorage()

    const indexOfItem = newContentStorage[key].indexOf(item)
    if (indexOfItem > -1) {
      newContentStorage[key].splice(indexOfItem, 1)
    }
    window.localStorage.setItem(this.storageName, JSON.stringify(content))
  }
}