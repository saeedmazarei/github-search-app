import api from './config'

export const searchRequest = (query) => api.get(`repositories?q=${query}`)

export const searchDetail = (owner, repo) => api.get(`repos/${owner}/${repo}`)