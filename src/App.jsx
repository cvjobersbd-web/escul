// App.jsx
import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import FAQ from './pages/FAQ';
import MyClass from './pages/MyClass';
import ClassRoom from './pages/ClassRoom'; // ইম্পোর্ট করুন
import Helpdesk from './pages/Helpdesk';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="my-class" element={<MyClass />} />
          <Route path="my-class/:courseId" element={<ClassRoom />} /> {/* নতুন রাউট */}
          <Route path="helpdesk" element={<Helpdesk />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;