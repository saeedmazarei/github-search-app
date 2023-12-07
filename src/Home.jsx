import { Input, Row, Col } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

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
    return (
        <>
            <div>
                <Row justify="center" align="middle" style={{ height: '100vh' }}>
                    <Col xs={20} sm={18} md={14} lg={12}>
                        <Search
                            placeholder="Search a Repository"
                            allowClear
                            suffix={suffix}
                            enterButton
                        />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home
