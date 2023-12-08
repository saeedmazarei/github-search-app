import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { Card, Divider } from 'antd'

import { searchDetail } from '../../services/apis'
import CardHeader from './CardHeader'
import ImportantLink from './ImportantLink'

function RepoDetails() {
    const [loading, setLoading] = useState(false)
    const [repoDetail, setRepoDetail] = useState()
    const { owner, repo } = useParams()

    useEffect(() => {
        async function getRepositoryDetail() {
            setLoading(true)
            try {
                const response = await searchDetail(owner, repo)
                setRepoDetail(response.data)
                setLoading(false)
            } catch {
                setLoading(false)
            }
        }
        getRepositoryDetail()
    }, [owner, repo])

    return (
        <>
            {repoDetail && (
                <Card loading={loading} style={{ margin: '5%' }}>
                    <CardHeader repoDetail={repoDetail} />
                    <Divider />
                    <ImportantLink repoDetails={repoDetail} />
                </Card>
            )}
        </>
    )
}

export default RepoDetails
