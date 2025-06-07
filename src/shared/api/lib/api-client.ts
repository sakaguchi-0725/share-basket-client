import axios, { type InternalAxiosRequestConfig, type AxiosError } from "axios"
import type { ApiResponse } from "../model"

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = true
  return config
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

api.interceptors.request.use(authInterceptor)
api.interceptors.response.use(
  (resp) => resp,
  (error: AxiosError) => {
    if (import.meta.env.DEV) {
      console.error('API Error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      })
    }

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams()
      const redirectTo = window.location.pathname + window.location.search
      searchParams.set('redirectTo', redirectTo)
      window.location.href = `/login?${searchParams.toString()}`
    }
    return Promise.reject(error)
  }
)

const httpFetch = async <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  params?: Record<string, string>,
  body?: unknown
): Promise<ApiResponse<T>> => {
  try {
    const response = await api.request({
      method,
      url,
      params,
      data: body
    })

    return {
      body: response.data,
      status: response.status
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        body: error.response?.data,
        status: error.response?.status ?? 500
      }
    }
    throw error
  }
}

export const apiGet = <T>(path: string, params?: Record<string, string>): Promise<ApiResponse<T>> => {
  return httpFetch<T>('get', path, params)
}

export const apiPost = <T>(path: string, body: unknown, params?: Record<string, string>): Promise<ApiResponse<T>> => {
  return httpFetch<T>('post', path, params, body)
}

export const apiPut = <T>(path: string, body: unknown, params?: Record<string, string>): Promise<ApiResponse<T>> => {
  return httpFetch<T>('put', path, params, body)
}

export const apiDelete = <T = void>(path: string, params?: Record<string, string>): Promise<ApiResponse<T>> => {
  return httpFetch<T>('delete', path, params)
}
