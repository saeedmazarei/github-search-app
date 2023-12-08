import { useState } from 'react'

import { Input, Row, Col, Image } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { searchRequest } from '../services/apis'
import ShowSearchResult from './ShowSearchResults'
import '../style/style.css'

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
            <div className="main-container">
                {searchResult.length === 0 && (
                    <Row justify="center">
                        <Col xs={24} sm={18} md={14} lg={12}>
                            <Image src="/assets/logo.png" className="logo" preview={false} />
                        </Col>
                    </Row>
                )}
                <Row justify="center" align="top">
                    {searchResult.length !== 0 && (
                        <Col xs={3} sm={2} md={2} lg={1}>
                            <Image
                                src="/assets/logo.png"
                                className='small-logo'
                                preview={false}
                            />
                        </Col>
                    )}
                    <Col xs={17} sm={17} md={13} lg={11}>
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
                {searchResult.length !== 0 && <ShowSearchResult searchResult={searchResult} />}
            </div>
        </>
    )
}

export default Home
