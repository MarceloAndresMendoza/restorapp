import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: base,
// })

export default defineConfig(
  {
    plugins: [react()],
  },
  ({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    // Dev Mode
    return {
      base: '',
    }
  } else {
    // command === 'build', Build Mode
    return {
      base: '/restorapp/',
    }
  }
})