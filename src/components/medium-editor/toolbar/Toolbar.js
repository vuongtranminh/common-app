import React, { useContext, useEffect, useRef, useState } from 'react'
import BlockToolbar from './BlockToolbar'
import InlineToolbar from './InlineToolbar'
import cx from 'classnames';
import { EditorContext } from '../MediumEditor';
import { getSelection, getSelectionRect } from '~/utils/mediumEditor';

const Toolbar = (props) => {

    const context = useContext(EditorContext)

    const { editorState } = context

    const [isOpen, setIsOpen] = useState(true)

    // if (!editorEnabled || editorState.getSelection().isCollapsed()) {
    //     setIsOpen(false)
    // }

    const toolbarRef = useRef()

    const mounted = useRef();

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

            console.log('Selection')
            console.log(selectionBoundary)

            const toolbarNode = toolbarRef.current

            const toolbarBoundary = toolbarNode.getBoundingClientRect()
            console.log('node')
            console.log(toolbarRef.current)
            console.log(props.editorRootRef.current)

            const parent = props.editorRootRef.current
            const parentBoundary = parent.getBoundingClientRect();

            console.log('Boundary')
            console.log(toolbarBoundary)
            console.log(parentBoundary)

            /*
                * Main logic for setting the toolbar position.
            */
            toolbarNode.style.top =
                `${(selectionBoundary.top - parentBoundary.top - toolbarBoundary.height - 5)}px`;
            toolbarNode.style.width = `${toolbarBoundary.width}px`;

            // The left side of the tooltip should be:
            // center of selection relative to parent - half width of toolbar
            const selectionCenter = (selectionBoundary.left + (selectionBoundary.width / 2)) - parentBoundary.left;
            let left = selectionCenter - (toolbarBoundary.width / 2);
            const screenLeft = parentBoundary.left + left;
            if (screenLeft < 0) {
                // If the toolbar would be off-screen
                // move it as far left as it can without going off-screen
                left = -parentBoundary.left;
            }
            toolbarNode.style.left = `${left}px`;

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