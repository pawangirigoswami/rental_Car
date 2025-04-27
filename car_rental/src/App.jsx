
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Client from './pages/Client';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Vechile from './pages/Vechile';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import CarCRUD from './pages/CarCrud';
import ListofRenter from './pages/ListofRenter';
import ListofHirer from './pages/ListofHirer';
import CarList from './pages/CarList';
import Booking from './pages/Booking';
import RenterRegister from './pages/RenterRegister';
import RenterLogin from './pages/RenterLogin';
import RenterDashboard from './pages/RenterDashboard';
import HirerRegister from './pages/HirerRegister';
import HirerLogin from './pages/HirerLogin';
import ViewCar from './pages/ViewCar';
import HirerBooking from './pages/HirerBooking';
import ViewCarHirer from './pages/ViewCarHirer';
import MakeBooking from './pages/MakeBooking';
import BookingHistory from './pages/BookingHistory';
import ChangePassword from './pages/ChangePassword';
import RenterBooking from './pages/RenterBooking';
import BrandManager from './pages/BrandManager';




function App() {
  

  return (
    <Router>
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/client' element={<Client/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/vehicles' element={<Vechile/>} />
          <Route path='/login/admin' element={<AdminLogin/>} />
          <Route path='/admin/dashboard' element={<AdminDashboard/>} />
          <Route path='/admin/crudcar' element={<CarCRUD/>} />
          <Route path='/admin/renter' element={<ListofRenter/>} />
          <Route path='/admin/hirer' element={<ListofHirer/>} />
          <Route path='/admin/carlist' element={<CarList/>} />
          <Route path='/admin/booking' element={<Booking/>} />
          <Route path='/register/renter' element={<RenterRegister/>} />
          <Route path='/renter/login' element={<RenterLogin/>} />
           <Route path='/renter/dashboard' element={<RenterDashboard/>} />
           <Route path='/register/hirer' element={<HirerRegister/>} />
           <Route path='/hirer/login' element={<HirerLogin/>} />
           <Route path='/hirer/viewcar' element={<ViewCar/>} />
           <Route path='/hirer/booking' element={<HirerBooking/>} />
           <Route path='/viewcarhirer' element={<ViewCarHirer/>} />
           <Route path='/makebooking' element={<MakeBooking/>} />
           <Route path='/bookinghistory' element={<BookingHistory/>} />
           <Route path='/changepassword' element={<ChangePassword/>} />
           <Route path='/renter/booking' element={<RenterBooking/>} />
           <Route path='/brand' element={<BrandManager/>} />
           






        
      </Routes>
    </Router>
  )
}

export default App
