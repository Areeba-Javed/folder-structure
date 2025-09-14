import { useState } from 'react'
import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Beauty from './components/Beauty.jsx'
import Lifestyle from './components/Lifestyle.jsx'
import FashionStyle from './components/FashionStyle.jsx'
import SinglePost from './components/SinglePost.jsx'
import Error from './components/Error.jsx'
import Health from './components/Health.jsx'
import Contact from './components/Contact.jsx'
import Healthpage from './components/Healthpage.jsx'
import Beautypage from './components/Beautypage.jsx'
import Lifestylepage from './components/Lifestylepage.jsx'




function App() {
   return (
    
    
    <div className='App'> 
<BrowserRouter>  
    <Navbar/> 
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/contact" element={<Contact/>}/>


<Route path="/beauty" element={<Beauty/>}/>
<Route path="/beauty/:pid" element={<Beautypage/>}/>

<Route path="/fashion" element={<FashionStyle/>}/>
<Route path="/fashion/:pid" element={<SinglePost/>}/> 


<Route path="/lifestyle" element={<Lifestyle/>}/>
<Route path="/lifestyle/:pid" element={<Lifestylepage/>}/>

<Route path="/health" element={<Health/>}/>
<Route path="/health/:pid" element={<Healthpage/>}/>

<Route path="/error" element={<Error/>}/>
{/* <Route path="/singlepost" element={<SinglePost/>}/> */}



</Routes>








     </BrowserRouter>
  
     </div>
 
     
      
  )
}

export default App
