import Env from './env'

describe('Env', () => {
  describe('get', () => {
    it('returns the value for the given key if available', () => {
      expect(Env().get('NODE_ENV')).toEqual('test')
    })

    it('returns null if the given key is not available', () => {
      expect(Env().get('SOME_ENV_VARIABLE_WHICH_DOES_NOT_EXIST')).toBeNull()
    })

    it('returns the defaultValue if the given key is not available', () => {
      expect(
        Env().get('SOME_ENV_VARIABLE_WHICH_DOES_NOT_EXIST', 'my default value'),
      ).toEqual('my default value')
    })
  })
})
