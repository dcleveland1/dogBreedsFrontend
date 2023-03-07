import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import { api } from '../services/api'
import { HTTP_METHODS, ResponseData, RequestMethod} from '../utils/constants'

type useHttpRequestPropsData = {
  isLoading: boolean
  error: string
  sendRequest: (
    url: string,
    method: RequestMethod,
    headers?: object,
    body?: object
  ) => Promise<ResponseData>
  clearError: () => void
}

const useHttpRequest = (): useHttpRequestPropsData => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>('')
  const cancelToken = axios.CancelToken
  const source = cancelToken.source()

  const sendRequest = useCallback(
    async (
      url: string,
      method: RequestMethod = 'GET',
      headers?: object,
      body?: object
    ): Promise<ResponseData> => {
      setIsLoading(true)
      try {
        const res =  await api({
          url: `${api.defaults.baseURL}${url}`,
          method,
          headers: { ...api.defaults.headers, ...headers },
          data: body,
          cancelToken: source.token,
        })
        const { data: responseData } = res

        return responseData
      } catch (error : any) {
        setError(error.response)
        throw error
      } finally {
        setIsLoading(false)
      }
    },
    []
  )

  const clearError = () => setError('')

  // useEffect(() => {
  //   return () => {
  //     source.cancel('axios request cancelled')
  //   }
  // }, [])

  return { isLoading, error, sendRequest, clearError }
}

export { useHttpRequest }
