import UpcomingAppointments from './screens/UpcomingAppointments'
import ScheduleAppointments from './screens/ScheduleAppointments'
import ChatBox from './screens/ChatBox'
import IdentityProfile from './screens/IdentityProfile'

const DashMain = ({ currentScreen }) => {
  return (
    <div className='mx-20 my-14'>
      {currentScreen === 'Dashboard' && <UpcomingAppointments />}
      {currentScreen === 'Schedule' && <ScheduleAppointments />}
      {currentScreen === 'Chat' && <ChatBox />}
      {currentScreen === 'Identification' && <IdentityProfile />}
    </div>
  )
}

export default DashMain
