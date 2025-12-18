import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './docs-theme.css'
import './script.js'


// import VPCarbonAds from './components/VPCarbonAds.vue'


export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // app.component('VPCarbonAds', VPCarbonAds)
  },
  
}