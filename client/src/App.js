import logo from './logo.svg';
import './App.css';
import TemplateDemo from './component/NavBar'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import HomePage from './component/HomePage';
import PersonalArea from './component/PersonalArea';
import PersonalAreaAdmin from './component/PersonalAreaAdmin'
import Discussions from './component/Discussions';
import Article from './component/Article';
import ArticleList from './component/ArticleList';
import EditArticle from './component/EditArticle'
import VideoList from './component/VideoList'
import AddVideo from './component/AddVideo'
import UpdateArticle from './component/UpdateArticle'
import ShowAllUsers from './component/ShowAllUsers'
import UpdateUser from './component/UpdateUser'
import {Provider} from 'react-redux'
import Logout from './component/Logout'
import Users from './component/Users'
import store from './store'
import ArticleListAdmin from './component/ArtlcleListAdmin';
import AdminDialogue from './component/AdminDialogue';
import ShowDiscussion from './component/ShowDiscussion';
import UsersDialogue from './component/UsersDialogue';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <TemplateDemo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personalArea" element={<PersonalArea/>} />
          <Route path="/personalAreaAdmin" element={<PersonalAreaAdmin/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/ArticleList" element={<ArticleList />} />
          <Route path="/createArticle" element={<EditArticle />} />
          <Route path="/videoList" element={<VideoList />} />
          <Route path="/addVideo" element={<AddVideo />} />
          <Route path="/articleListAdmin" element={<ArticleListAdmin />} />
          <Route path="/UpdateArticle" element={<UpdateArticle />} />
          <Route path="/ShowAllUsers" element={<ShowAllUsers />} />
          <Route path="/UpdateUser" element={<UpdateUser/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/adminDialogue" element={<AdminDialogue/>} />
          <Route path="/ShowDiscussion" element={<ShowDiscussion/>} />
          <Route path="/UsersDialogue" element={<UsersDialogue/>} />

        </Routes>
        
      </div></BrowserRouter>
      </Provider>
      
  );
}

export default App;
