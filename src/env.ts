const Env = () => {
  return {
    get: (key: string, defaultValue?: any): any => {
      if (key in process.env) {
        return process.env[key]
      }

      return defaultValue || null
    },
  }
}

export default Env
