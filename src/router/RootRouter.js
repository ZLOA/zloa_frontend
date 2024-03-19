import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Character from "../pages/Character/Character";
import CharProfile from "../pages/Character/CharProfile";
import CharSkill from "../pages/Character/CharSkill";
import CharAvatar from "../pages/Character/CharAvatar";
import CharHistory from "../pages/Character/CharHistory";
import CharExpedition from "../pages/Character/CharExpedition";
import CharGuild from "../pages/Character/CharGuild";
import Gold from "../pages/Gold/Gold";
import Comparison from "../pages/Comparison/Comparison";
import CompResult from "../pages/Comparison/CompResult";
import NoticeList from "../pages/Notice/NoticeList";

export default function RootRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/character/:id" element={<Character />}>
            <Route path="profile" element={<CharProfile />} />
            <Route path="skill" element={<CharSkill />} />
            <Route path="avatar" element={<CharAvatar />} />
            <Route path="history" element={<CharHistory />} />
            <Route path="expedition" element={<CharExpedition />} />
            <Route path="guild" element={<CharGuild />} />
          </Route>
          <Route path="/gold" element={<Gold />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/comparison/result/:id/:id2" element={<CompResult />} />
          <Route path="/notice" element={<NoticeList/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
