import proxyAddr from 'proxy-addr'
import Env from '@ioc:Adonis/Core/Env'
import { LoggerConfig } from '@ioc:Adonis/Core/Logger'
import { RequestConfig } from '@ioc:Adonis/Core/Request'
import { ResponseConfig } from '@ioc:Adonis/Core/Response'
import { ProfilerConfig } from '@ioc:Adonis/Core/Profiler'

type HttpConfig = RequestConfig & ResponseConfig

export const appKey: string = Env.get('APP_KEY', 'Ti3uWcUCWrNeypY7ukCE5iNEqGSyCTQQ') as string

export const http: HttpConfig = {
  allowMethodSpoofing: false,
  subdomainOffset: 2,
  generateRequestId: false,
  trustProxy: proxyAddr.compile('loopback'),
  etag: false,
  jsonpCallbackName: 'callback',
  cookie: {
    domain: '',
    path: '/',
    maxAge: '2h',
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
  forceContentNegotiationToJSON: true,
}

export const logger: LoggerConfig = {
  name: Env.get('APP_NAME') as string,
  enabled: true,
  level: Env.get('LOG_LEVEL', 'info') as string,
  prettyPrint: Env.get('NODE_ENV') === 'development',
}

export const profiler: ProfilerConfig = {
  enabled: true,
  blacklist: [],
  whitelist: [],
}
