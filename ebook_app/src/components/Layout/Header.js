import React, { Fragment, Link } from 'react';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

import wallpaper from '../../assets/images/bookmark.jpg';
import food from '../../assets/images/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bookmark</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={food} alt='food'></img>
      </div>
    </Fragment>

    // <Fragment>
    //   <header className={`${classes.header__main}`}>
    //     <h1 className={`${classes.header_item} ${classes.logo}`}>Bookmarks</h1>
    //     <SearchBar
    //       className={`${classes.header__item} ${classes.search}`}
    //       defaultText='Search by book title, author, or technology key word(s)'
    //     />
    //     <Link
    //       className={`${classes.header__item} ${classes.archive}`}
    //       to='../Archive/Archive'
    //     >
    //       Archive
    //     </Link>{' '}
    //     {/*handles user's collection of ebooks, requires login*/}
    //     {/*may have similar logic to cart*/}
    //     <Link
    //       className={`${classes.header__item} ${classes.about}`}
    //       to='../About/About'
    //     >
    //       About
    //     </Link>
    //     <Link
    //       className={`${classes.header__item} ${classes.faq}`}
    //       to='../FAQ/FAQs'
    //     >
    //       FAQ
    //     </Link>
    //   </header>
    //   <div className='wallpaper__container'>
    //       <h1 className={classes.watermark}>Bookmark</h1>
    //         <img src={wallpaper} />
    //   </div>
    // </Fragment>
  );
};

export default Header;
