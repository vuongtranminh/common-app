import React, { useContext, useEffect, useRef, useState } from 'react'
import BlockToolbar from './BlockToolbar'
import InlineToolbar from './InlineToolbar'
import cx from 'classnames';
import { EditorContext } from '../MediumEditor';

const Toolbar = (props) => {

    const context = useContext(EditorContext)

    const { editorState } = context

    const [isOpen, setIsOpen] = useState(true)

    // if (!editorEnabled || editorState.getSelection().isCollapsed()) {
    //     setIsOpen(false)
    // }

    const toolbarRef = useRef(null)

    const mounted = useRef(null);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            const selectionState = editorState.getSelection();
            if (selectionState.isCollapsed()) {
                return;
            }

            const nativeSelection = getSelection(window);

            if (!nativeSelection.rangeCount) {
                return;
            }

            const selectionBoundary = getSelectionRect(nativeSelection);

            // const toolbarBoundary = toolbarRef.current.getBoundingClientRect()
            console.log(toolbarRef.current)
            console.log(props.editorRef.current)

            // const toolbarNode = ReactDOM.findDOMNode(this);
            // const toolbarBoundary = toolbarNode.getBoundingClientRect();

            // const parent = ReactDOM.findDOMNode(this.props.editorNode);
            // const parentBoundary = parent.getBoundingClientRect();

        }
    });

    const className = cx('md-toolbar', {
        'md-toolbar--active': isOpen,
    })
    return (
        <div className={className} ref={toolbarRef}>
            <BlockToolbar />
            <InlineToolbar />
        </div>
    )
}

Toolbar.propTypes = {}

export default Toolbar