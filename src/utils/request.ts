import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { BASE_API_URL } from '@/constants/global'
import { getToken, removeToken, setToken } from './auth'
import { useRouter } from 'vue-router'

const router = useRouter()

export class Request {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { baseURL: BASE_API_URL, timeout: 60000 }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create({ ...this.baseConfig, ...config })

    this.instance.interceptors.request.use(
      (config) => {
        const token = getToken()
        if (token) {
          config.headers!.Authorization = token
        }
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // refresh access token
        const token = res.headers.authorization
        if (token) {
          setToken(token)
        }
        return res
      },
      (err: any) => {
        let message = ''
        switch (err.response.status) {
          case 400:
            message = '请求错误(400)'
            break
          case 401:
            message = '未授权，请重新登录(401)'
            removeToken()
            router.replace('/login')
            break
          case 403:
            message = '拒绝访问(403)'
            break
          case 404:
            message = '请求出错(404)'
            break
          case 408:
            message = '请求超时(408)'
            break
          case 500:
            message = '服务器错误(500)'
            break
          case 501:
            message = '服务未实现(501)'
            break
          case 502:
            message = '网络错误(502)'
            break
          case 503:
            message = '服务不可用(503)'
            break
          case 504:
            message = '网络超时(504)'
            break
          case 505:
            message = 'HTTP版本不受支持(505)'
            break
          default:
            message = `连接出错(${err.response.status})!`
        }
        ElMessage({
          showClose: true,
          message: `${message}`,
          type: 'error'
        })
        return Promise.reject(err.response)
      }
    )
  }

  public async request<T = any>(config: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.instance.request(config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  public async get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.instance.request({
        method: 'get',
        url,
        params,
        ...config
      })
      return res.data
    } catch (error) {
      throw error
    }
  }

  public async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.instance.post(url, data, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  public async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.instance.put(url, data, config)
      return res.data
    } catch (error) {
      throw error
    }
  }

  public async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.instance.delete(url, config)
      return res.data
    } catch (error) {
      throw error
    }
  }
}

export default new Request({})
