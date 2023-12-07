import { useState } from 'react'

import { Input, Row, Col } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { searchRequest } from '../services/apis'
import ShowSearchResult from './ShowSearchResults'

const { Search } = Input
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
)

function Home() {
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)

    async function searchHandler(value) {
        if (value === '') {
            setSearchResult([])
        } else {
            setLoading(true)
            const response = await searchRequest(value)
            setSearchResult(response.data.items)
            setLoading(false)
        }
    }

    return (
        <>
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Row justify={'center'}>
                    <Col xs={20} sm={18} md={14} lg={12}>
                        <Search
                            placeholder="Search a Repository"
                            allowClear
                            suffix={suffix}
                            enterButton
                            onSearch={searchHandler}
                            loading={loading}
                        />
                    </Col>
                </Row>
                {searchResult.length !== 0 && (
                    <ShowSearchResult searchResult={searchResult} />
                )}
            </div>
        </>
    )
}

export default Home
