import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as pages from './pages'
import { Navigate, RefreshToken } from "./component/general"
import { Header } from "./component/shared"

export const Router = () => {
    return (
        <BrowserRouter>
            <RefreshToken />
            <Header />
            <Navigate />
            <Routes>
                <Route element={<pages.CreatePostPage />} path="/create-post" />
                <Route element={<pages.GamePage />} path="/game/:id" />
                <Route element={<pages.ProfilePage />} path="/profile/:id" />
                <Route element={<pages.AuthPage />} path="/auth" />

                <Route element={<pages.MainPage />} path="/" />
                <Route element={<pages.EditProfilePage />} path="/edit-profile" />
                <Route element={<pages.CommunityPage />} path="/community" />
                <Route element={<pages.PostPage />} path="/post/:id" />
                <Route element={<pages.PostsPage />} path="/posts" />

                <Route element={<pages.TestPage />} path="/test" />
            </Routes>
        </BrowserRouter>
    )
}