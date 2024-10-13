import './loading.css'

import logo from '@images/logo.png'

const Loading = ({ height }: { height: string }) => {
  return (
    <div id="loading" style={{ height: height || '100vh' }}>
      <img src={logo} alt="Market logo" width={40} />
      <p>Loading...</p>
    </div>
  )
}

export default Loading