import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as pages from './pages'
import { RefreshToken, ToastArea } from "./component/master"
import { Header, Navigate } from "./component/shared"

export const Router = () => {
    return (
        <BrowserRouter>
            <RefreshToken />
            <Header />
            <ToastArea />
            <Navigate />

            <Routes>
                <Route element={<pages.SessionPage />} path="/session/:id/:name" />
                <Route element={<pages.ProfilePage />} path="/profile/:id/:name" />
                <Route element={<pages.MainPage />} path="/" />
                <Route element={<pages.CreatePostPage />} path="/create-post" />
                <Route element={<pages.ChangePasswordPage />} path="/change-password" />
                <Route element={<pages.EditProfilePage />} path="/edit-profile" />
                <Route element={<pages.AuthPage />} path="/auth" />
                <Route element={<pages.CommunityPage />} path="/community" />
                <Route element={<pages.PostPage />} path="/post/:id/:name" />
                <Route element={<pages.ForumPage />} path="/forum" />
                <Route element={<pages.DepartmentPage />} path="/department/:name" />

                <Route element={<pages.P404Page />} path="*" />
                {/* <Route element={<pages.TestPage />} path="/test" /> */}
            </Routes>
        </BrowserRouter>
    )
}