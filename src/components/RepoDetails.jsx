import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { Skeleton } from 'antd'

import { searchDetail } from '../services/apis'

function RepoDetails() {
    const [loading, setLoading] = useState(false)
    const [repoDetail, setRepoDetail] = useState()
    const { owner, repo } = useParams()

    useEffect(() => {
        async function getRepositoryDetail() {
            setLoading(true)
            const response = await searchDetail(owner, repo)
            setRepoDetail(response.data)
            setLoading(false)
        }
        getRepositoryDetail()
    }, [owner,repo])

    return <>{loading && <Skeleton active />}</>
}

export default RepoDetails

