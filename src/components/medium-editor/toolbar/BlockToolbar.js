import React, { useContext } from 'react'
import StyleButton from './StyleButton';
import { EditorContext } from '../MediumEditor';

const BlockToolbar = () => {
    const context = useContext(EditorContext)

    const { editorState } = context;

    const selection = editorState.getSelection();

    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className='md-controls md-controls--block'>
            {BLOCK_BUTTONS.map(type =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={context.onToggleBlock}
                    style={type.style}
                    icon={type.icon}
                    description={type.description}
                />
            )}
        </div>
    )
}

const BLOCK_BUTTONS = [
    {
        label: 'H1',
        style: 'header-one',
        description: 'Heading 1',
    },
    // {
    //     label: 'H2',
    //     style: 'header-two',
    //     description: 'Heading 2',
    // },
    // {
    //     label: 'H3',
    //     style: 'header-three',
    //     description: 'Heading 3',
    // },
    // {
    //     label: 'H4',
    //     style: 'header-four',
    //     description: 'Heading 4',
    // },
    // {
    //     label: 'H5',
    //     style: 'header-five',
    //     description: 'Heading 5',
    // },
    // {
    //     label: 'H6',
    //     style: 'header-six',
    //     description: 'Heading 6',
    // },
    {
        label: (
            <svg width="10.83" height="10" viewBox="0 0 13 12">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-357.000000, -255.000000)" fill="#FFFFFF">
                        <g transform="translate(260.000000, 165.000000)">
                            <g transform="translate(0.000000, 75.000000)">
                                <g transform="translate(19.000000, 0.000000)">
                                    <path d="M90.500768,15 L91,15.56 C88.9631235,17.0533408 87.9447005,18.666658 87.9447005,20.4 C87.9447005,21.8800074 88.75012,23.1466614 90.3609831,24.2 L87.5453149,27 C85.9211388,25.7866606 85.109063,24.346675 85.109063,22.68 C85.109063,20.3199882 86.90628,17.7600138 90.500768,15 Z M83.3917051,15 L83.890937,15.56 C81.8540605,17.0533408 80.8356375,18.666658 80.8356375,20.4 C80.8356375,21.8800074 81.6344006,23.1466614 83.2319508,24.2 L80.4362519,27 C78.8120759,25.7866606 78,24.346675 78,22.68 C78,20.3199882 79.7972171,17.7600138 83.3917051,15 Z" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
        style: 'blockquote',
        description: 'Blockquote',
    },
    {
        label: 'UL',
        style: 'unordered-list-item',
        description: 'Unordered List',
    },
    {
        label: 'OL',
        style: 'ordered-list-item',
        description: 'Ordered List',
    },
    {
        label: '✓',
        style: 'todo',
        description: 'Todo List',
    },
    {
        label: "Code Block",
        style: "code-block",
        icon: 'code-block',
        description: 'Code block',
    }
];

export default BlockToolbar