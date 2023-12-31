import React from 'react';
import s from "./Header.module.css";

export class Header extends React.Component<any, any> {
    render() {
        return <header className={s.header}><img
            src="https://s.tmimgcdn.com/scr/800x500/314400/n-initial-business-name-logo-vector-design-v6_314408-original.jpg"/>
        </header>
    }
}


// export const Header = () => {
//     return (
//         <header className={s.header}><img
//             src="https://s.tmimgcdn.com/scr/800x500/314400/n-initial-business-name-logo-vector-design-v6_314408-original.jpg"/>
//         </header>
//     );
// };

