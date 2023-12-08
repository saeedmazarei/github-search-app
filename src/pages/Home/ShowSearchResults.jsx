import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Row, Col, Avatar, List } from 'antd'

function ShowSearchResult({ searchResult }) {
    return (
        <Row justify={'center'} style={{ marginTop: '10px' }}>
            <Col xs={20} sm={18} md={14} lg={12}>
                <div style={{ height: '90vh', overflow: 'auto' }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={searchResult}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            src={item.owner.avatar_url}
                                        />
                                    }
                                    title={<Link to={`/details/${item.owner.login}/${item.name}`}>{item.full_name}</Link>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </Col>
        </Row>
    )
}

ShowSearchResult.propTypes = {
    searchResult: PropTypes.array.isRequired,
}

export default ShowSearchResult
