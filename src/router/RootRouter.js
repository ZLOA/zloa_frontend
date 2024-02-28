import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Character from "../pages/Character/Character";
import CharProfile from "../pages/Character/CharProfile";
import CharSkill from "../pages/Character/CharSkill";
import CharAvatar from "../pages/Character/CharAvatar";
import CharHistory from "../pages/Character/CharHistory";
import CharExpedition from "../pages/Character/CharExpedition";
import CharGuild from "../pages/Character/CharGuild";

export default function RootRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/character" element={<Character />}>
            <Route path="profile" element={<CharProfile />} />
            <Route path="skill" element={<CharSkill />} />
            <Route path="avatar" element={<CharAvatar />} />
            <Route path="history" element={<CharHistory />} />
            <Route path="expedition" element={<CharExpedition />} />
            <Route path="guild" element={<CharGuild />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
