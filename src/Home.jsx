import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'

const { Search } = Input
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

function Home() {
    return (
        <>
            <div style={{ display: 'flex ', justifyContent: 'center', alignItems: 'center', height: '95vh'}}>
                <Search placeholder='Search a Repository' allowClear suffix={suffix} enterButton style={{ width: '50%' }} />
            </div>
        </>
    )
}

export default Home
