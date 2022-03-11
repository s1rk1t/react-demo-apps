import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext; // can only use this once

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  componentDidMount() {
    // send http request...
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <UsersContext.Consumer>
          <div className={classes.finder}>
            <input
              type='search'
              onChange={this.searchChangeHandler.bind(this)}
            />
          </div>
          <ErrorBoundary>
            {' '}
            {/* will catch any errors thrown by child element */}
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </UsersContext.Consumer>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
