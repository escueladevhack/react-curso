import React from 'react';
import { Grid, Textfield, Cell, Icon } from 'react-mdl';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ListItem from './../reduxContainers/postListItemContainer';
import './style.css';

export default class ListContainer extends React.Component {
  static propTypes = {
    posts: ImmutablePropTypes.map.isRequired,
    getPostsList: React.PropTypes.func.isRequired,
    removePost: React.PropTypes.func.isRequired,
    search: React.PropTypes.func.isRequired,
    filters: ImmutablePropTypes.map.isRequired,
    clearUserFilter: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { getPostsList, posts } = this.props;

    if (posts.size <= 1) {
      getPostsList();
    }
  }

  searchPosts = (e) => {
    const { search } = this.props;
    const value = e.target.value;

    search(value);
  };

  renderListItem = (item) => {
    const { removePost } = this.props;

    return (
      <ListItem
        key={item.get('id')}
        post={item}
        removePost={removePost}
      />
    );
  };

  render() {
    const { posts, filters, clearUserFilter } = this.props;
    const postsList = posts.valueSeq().map(this.renderListItem);

    return (
      <Grid>
        <Cell col={12}>
          <Textfield
            value={filters.get('search')}
            onChange={this.searchPosts}
            label="Search"
            expandable
            expandableIcon="search"
            className="search-input"
          />
        </Cell>
        {filters.get('userId') &&
          <Cell col={12}>
            <span className="user-filter">
              <span className="username">
                {filters.getIn(['user', 'name'])}
              </span>
              <span>
                <Icon
                  name="clear"
                  onClick={clearUserFilter}
                  className="clear-user-filter"
                />
              </span>
            </span>
          </Cell>
        }
        <Cell col={12}>
          {postsList}
        </Cell>
      </Grid>
    );
  }
}
