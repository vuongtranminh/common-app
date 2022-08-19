import { Editor, EditorState, RichUtils } from 'draft-js';
import React, { createContext, useRef, useState } from 'react';
import Toolbar from './toolbar/Toolbar';

export const EditorContext = createContext();

const MediumEditor = () => {
    const editorRef = useRef();
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleToggleBlockType = (blockType) => {
        handleChange(RichUtils.toggleBlockType(editorState, blockType));
    }

    const handleToggleInlineStyle = (inlineStyle) => {
        handleChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }

    const handleChange = (editorState) => {
        setEditorState(editorState)
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleChange(newState);
            return true;
        }
        return false;
    }

    const handleFocus = () => {
        editorRef.current.focus();
    }

    const contextValue = {
        editorState,
        onToggleBlock: handleToggleBlockType,
        onToggleInline: handleToggleInlineStyle
    }

    return (
        <div className="md-medium-editor" onClick={handleFocus}>
            <EditorContext.Provider value={contextValue}>
                <Toolbar editorRef={editorRef} />
            </EditorContext.Provider>
            <Editor
                ref={editorRef}
                editorState={editorState}
                onChange={handleChange}
                handleKeyCommand={handleKeyCommand}
                placeholder="Tell a story..."
            />
        </div>
    );
};

export default MediumEditor;
