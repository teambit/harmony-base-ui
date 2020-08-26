import React, {PureComponent} from 'react';
import Tooltip from 'rc-tooltip';
import './collapsed-pane.css';

type CollapsedPaneProps = {
    onClick: (e: React.MouseEvent) => void;
}
export default class CollapsedPane extends PureComponent<CollapsedPaneProps> {
    render() {
        const { onClick } = this.props;
        return (
            <div className="collapsedFileExplorer">
                <Tooltip overlay="expand navigator" placement="bottom" mouseLeaveDelay={0}>
                    <span className="file-li-action" onClick={onClick && onClick}>
                        <i className="playcon-slide-right" />
                    </span>
                </Tooltip>
            </div>
        )
    }
}