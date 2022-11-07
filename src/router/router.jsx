import React from 'react';
import {
  // BrowserRouter,
  Routes,
  Route,
  Navigate,
} from '../../node_modules/react-router-dom/dist/index';

import ChallengeDetail from '../pages/ChallengeDetail';
import ChallengeList from '../pages/ChallengeList';
import ChallengeResult from '../pages/ChallengeResult';
import CreateChallenge from '../pages/CreateChallenge';
import EditProfile from '../pages/EditProfile';
import ErrorPage from '../pages/ErrorPage';
import Feed from '../pages/Feed';
import FriendsList from '../pages/FriendsList';
import Login from '../pages/Login';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import Onboarding from '../pages/Onboarding';
import Register from '../pages/Register';
import Withdraw from '../pages/Withdraw';
import Report from '../pages/Report';

// 최초 방문 유저 판별
// const FirstPage = ({ children }) => {
//   if (
//     window.localStorage.getItem("firstEnter") === null &&
//     window.localStorage.getItem("token") === null
//   ) {
//     return <Navigate to="/onboarding" />;
//   }
//   return children;
// };

const Router = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/challenge-list" element={<ChallengeList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/challenge-detail" element={<ChallengeDetail />} />
      <Route path="/challenge-result" element={<ChallengeResult />} />
      <Route path="/create-challenge" element={<CreateChallenge />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/friends-list" element={<FriendsList />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/report" element={<Report />} />
    </Routes>
    // </BrowserRouter>
  );
};

export default Router;
