import React from 'react';
import classNames from "classnames/bind";
import styles from "./Header.module.scss"

const cx = classNames.bind(styles);

function Header() {
     return (
          <header className={cx('wrapper')}>
               <div className={cx('inner')}>
                    <div className="wrapper_top">

                    </div>
                    <div className="wrapper_nav">

                    </div>
               </div>
          </header>
     );
};

export default Header;