import { Icon } from 'modules/common/components';
import { router } from 'modules/common/utils';
import React, { Component } from 'react';
import { withRouter } from 'react-router';

type Props = {
  history: any,
  sortField?: string,
  location: any,
  match: any
};

class SortHandler extends Component<Props> {
  sortHandler(field, direction) {
    const { history } = this.props;

    router.setParams(history, { sortField: field, sortDirection: direction });
  }

  checkSortActive(name, direction) {
    const { history } = this.props;

    if (
      router.getParam(history, 'sortField') === name &&
      router.getParam(history, 'sortDirection') === direction.toString()
    ) {
      return true;
    }

    return false;
  }

  render() {
    const { sortField } = this.props;

    return (
      <div className="table-sorter">
        <Icon
          icon="uparrow-2"
          size={7}
          isActive={this.checkSortActive(sortField, -1)}
          onClick={() => this.sortHandler(sortField, -1)}
        />
        <Icon
          icon="downarrow"
          size={7}
          isActive={this.checkSortActive(sortField, 1)}
          onClick={() => this.sortHandler(sortField, 1)}
        />
      </div>
    );
  }
}

export default withRouter<Props>(SortHandler);