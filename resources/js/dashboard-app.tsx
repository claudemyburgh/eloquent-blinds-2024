import '@/bootstrap';
import '../css/app.css';
import {RecoilRoot} from 'recoil';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/react';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import colors from "tailwindcss/colors";
import "@/lib/theme-script"

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./dashboard/Pages/${name}.tsx`, import.meta.glob('./dashboard/Pages/**/*.tsx')),
  setup({el, App, props}) {
    const root = createRoot(el);
    root.render(
      <RecoilRoot>
        <App {...props} />
      </RecoilRoot>);
  },
  progress: {
    color: colors.sky['500']
  },
});
