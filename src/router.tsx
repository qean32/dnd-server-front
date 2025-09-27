import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as pages from './pages'
import { RefreshToken } from "./component/general"
import { Header } from "./component/shared"

export const Router = () => {
    return (
        <BrowserRouter>
            <RefreshToken />
            <Header />
            <Routes>
                <Route element={<pages.MainPage />} path="/" />
                <Route element={<pages.AuthPage />} path="/auth" />
                <Route element={<pages.CommunityPage />} path="/community" />
                <Route element={<pages.GamePage />} path="/game/:id" />
                <Route element={<pages.PostPage />} path="/post/:id" />
                <Route element={<pages.PostsPage />} path="/posts" />
                <Route element={<pages.ProfilePage />} path="/profile/:id" />
                <Route element={<pages.TestPage />} path="/test" />
            </Routes>
        </BrowserRouter>
    )
}