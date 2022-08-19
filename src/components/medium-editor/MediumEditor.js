import { Editor, EditorState } from 'draft-js';
import React, { useState } from 'react';

const MediumEditor = () => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    return (
        <div className="md-medium-editor">
            <div></div>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    );
};

export default MediumEditor;
