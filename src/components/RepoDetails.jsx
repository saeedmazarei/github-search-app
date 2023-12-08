import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { Avatar, Card, Space, Divider } from 'antd'
import { ForkOutlined, EyeOutlined, CloseCircleOutlined } from '@ant-design/icons'

import { searchDetail } from '../services/apis'

const { Meta } = Card

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
    }, [owner, repo])

    return (
        <>
            <Card loading={loading} style={{ margin: '5%' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap'
                    }}
                >
                    <Meta
                        avatar={<Avatar src={repoDetail?.owner.avatar_url} />}
                        title={repoDetail?.full_name}
                        description={repoDetail?.description}
                    />
                    <Space split={<Divider type="vertical" />}>
                        <Space>
                            <ForkOutlined />
                            <span>Fork: {repoDetail?.forks}</span>
                        </Space>
                        <Space>
                            <EyeOutlined />
                            <span>Watchers: {repoDetail?.watchers}</span>
                        </Space>
                        <Space>
                            <CloseCircleOutlined />
                            <span>Open Issues: {repoDetail?.open_issues}</span>
                        </Space>
                    </Space>
                </div>
                <Divider />
            </Card>
        </>
    )
}

export default RepoDetails
