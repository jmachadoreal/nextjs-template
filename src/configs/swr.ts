import { SWRConfiguration } from 'swr'

import http from './http'

const config: SWRConfiguration = {
  fetcher: url => http.get(url).then(res => res.data),
  revalidateOnReconnect: true,
  revalidateOnFocus: true,
  revalidateIfStale: true
}

export default config
