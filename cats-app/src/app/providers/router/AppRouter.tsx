import { Routes, Route, Navigate } from 'react-router-dom'
import { CatsPage } from '@/pages/cats-page'
import { FavoritesPage } from '@/pages/favorites-page'
import { MainLayout } from '@/app/layouts/MainLayout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/cats" replace />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}