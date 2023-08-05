import {appWithTranslation} from 'next-i18next';

import {AuthProvider} from "../auth/context/auth.context";

import '@fullcalendar/common/main.min.css'
import '@fullcalendar/daygrid/main.min.css'
import '@fullcalendar/timegrid/main.min.css'

import '../src/styles/main.scss';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider >
            <Component {...pageProps} />
        </AuthProvider>
    )
}


export default appWithTranslation(MyApp);

