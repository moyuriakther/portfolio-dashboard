import './App.css'
import MainLayout from './component/layout/MainLayout'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
 

  return (
    <ProtectedRoute>
      <div style={{ backgroundColor: "#6b15eb" }}>
        <MainLayout />
      </div>
    </ProtectedRoute>
  )
}

export default App
