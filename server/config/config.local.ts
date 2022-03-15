import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    tracer: {
      mode: 'uuid'
    }
  }
  return config
}
