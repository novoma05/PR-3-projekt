// import { Editor as WysiwygEditor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

import styles from './editor.module.css';

const WysiwygEditor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
);

type Props = {
  initValue?: string;
  onChange?: (value: string) => void;
};

export const Editor: FC<Props> = ({ initValue, onChange }) => {
  const [editorState, setEditorState] = useState(
    initValue
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(initValue)))
      : EditorState.createEmpty(),
  );

  const save = (state: EditorState) => {
    setEditorState(state);
    const textSerialized = JSON.stringify(
      convertToRaw(state.getCurrentContent()),
    );
    // console.log(textSerialized, onChange)
    onChange?.(textSerialized);
  };

  return (
    <div className={styles.editor}>
      <WysiwygEditor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={save}
      />
    </div>
  );
};
