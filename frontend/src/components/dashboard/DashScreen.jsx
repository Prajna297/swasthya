import Appointments from './screens/Appointments'
import Main from './screens/Main'
import ChatBox from './screens/ChatBox'
import IdentityProfile from './screens/IdentityProfile'

const DashScreen = ({ currentScreen }) => {
  return (
    <div className='mx-20 my-14'>
      {currentScreen === 'Dashboard' && <Main />}
      {currentScreen === 'Schedule' && <Appointments />}
      {currentScreen === 'Chat' && <ChatBox />}
      {currentScreen === 'Identification' && <IdentityProfile />}
    </div>
  )
}

export default DashScreen
