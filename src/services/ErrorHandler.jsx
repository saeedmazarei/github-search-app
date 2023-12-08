import { message } from 'antd'
import api from './config'

function AxiosErrorHandler() {
    api.interceptors.response.use(
        function (response) {
            return response
        },
        function (errors) {
            const { status } = errors.response
            if (status === 400) {
                message.error('Somthing Went Wrong')
            } else if (status === 403) {
                message.error('Access Denied')
            } else if (status === 404) {
                message.error('Page Not Found')
            } else if (status === 429) {
                message.error('Too much Request')
            } else if (status === 500) {
                message.error('Somthing Went Wrong')
            } else if (status === 401) {
                localStorage.clear()
                sessionStorage.clear()
                message.error('Network Error')
            }
            return
        },
    )
    return <></>
}

export default AxiosErrorHandler
