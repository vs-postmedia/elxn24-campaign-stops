import '$css/app.css'
import App from './App.svelte'

// create .env file with var starting w/ "VITE_" to access from app
// const SOME_API_KEY = import.meta.env.VITE_SOME_API_KEY;

const app = new App({
  target: document.getElementById('app')
})

export default app
