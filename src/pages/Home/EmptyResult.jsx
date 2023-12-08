import { Empty } from "antd"

function EmptyResult() {
    return (
        <Empty
            image="/assets/empty.svg"
            style={{ marginTop: '5%' }}
            imageStyle={{
                height: 60,
            }}
            description={<span>No Repository Found</span>}
        ></Empty>
    )
}

export default EmptyResult
