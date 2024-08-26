import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { FC } from "react";


interface CodeEditorProps {
    code: string;
    theme: Extension;
    onChange: (value: string) => void;
    language: Extension[];
}

const CodeEditor: FC<CodeEditorProps> = (props) => {
    const {code, onChange, theme, language} = props;
    return(
        <div className="h-full overflow-auto">
            <CodeMirror className="text-sm"
                value={code}
                theme={theme}
                onChange={onChange}
                extensions={language}
            />
        </div>
    );
}

export default CodeEditor;