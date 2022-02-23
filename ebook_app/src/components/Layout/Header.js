import React, { Fragment, Link } from 'react';
// allows for dynamic class names and handling css scope
import classes from './Header.module.css';
import wallpaper from '../../assets/images/bookmark.jpg';

const Header = (props) => {
  return (
      
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
