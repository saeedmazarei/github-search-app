/* eslint-disable react/prop-types */
import { Typography, List } from 'antd'
const { Title } = Typography

function ImportantLink({ repoDetails }) {
    return (
        <>
            <Title level={3}>Links</Title>
            <List bordered>
                <List.Item>
                    <a href={repoDetails?.owner.html_url} rel="noreferrer" target="_blank">
                        {repoDetails?.owner.login} Github Page
                    </a>
                </List.Item>
                <List.Item>
                    <a href={repoDetails?.html_url} rel="noreferrer" target="_blank">
                        {repoDetails?.name} Repository page on github
                    </a>
                </List.Item>
            </List>
        </>
    )
}

export default ImportantLink
