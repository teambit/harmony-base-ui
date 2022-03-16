import './collapsed-pane.css';

import Tooltip from 'rc-tooltip';
import React, { PureComponent } from 'react';

type CollapsedPaneProps = {
  onClick: (e: React.MouseEvent) => void;
};
export default class CollapsedPane extends PureComponent<CollapsedPaneProps> {
  render() {
    const { onClick } = this.props;
    return (
      <div className="collapsedFileExplorer">
        <Tooltip overlay="expand navigator" placement="bottom" mouseLeaveDelay={0}>
          <span className="file-li-action" onClick={onClick}>
            <i className="playcon-slide-right" />
          </span>
        </Tooltip>
      </div>
    );
  }
}
