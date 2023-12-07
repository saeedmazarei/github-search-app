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
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Row>
                    <Col xs={20} sm={18} md={14} lg={12}>
                        <Search
                            placeholder="Search a Repository"
                            allowClear
                            suffix={suffix}
                            enterButton
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={20} sm={18} md={14} lg={12}>
                        <div style={{ border: '1px solid black', height: '100px' }}></div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home
