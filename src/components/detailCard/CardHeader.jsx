/* eslint-disable react/prop-types */
import { Avatar, Space, Divider, Card } from 'antd'
import { ForkOutlined, EyeOutlined, CloseCircleOutlined } from '@ant-design/icons'

const { Meta } = Card

function CardHeader({ repoDetail }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
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
    )
}

export default CardHeader
