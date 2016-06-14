import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <FormattedMessage
            id='list_item.title'
            defaultMessage='My List Item' />
        </h2>
      </div>
    );
  }
}