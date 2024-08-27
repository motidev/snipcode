"use client";
import { useState, useEffect } from 'react';
import CodeEditor from '../components/CodeEditor';
import { javascript } from '@codemirror/lang-javascript';
import runjavascript from '../runner/Javascript';
import ResultView from '../components/ResultView';
import { xcodeDark } from '@uiw/codemirror-theme-xcode';

function Page() {
  const [code, setCode] = useState<string>('console.log("Welcome to SnipCode!!")');
  const [output, setOutput] = useState<string>('');

  useEffect(() => {
    const handlerun = () => {
      try {
        const result = runjavascript(code);
        setOutput(result.join("\n"));
      } catch (error: any) {
        setOutput(error.message);
      }
    };

    handlerun();
  }, [code]);

  return (
    <div>
      <div className='flex ml-14'>
        <div className='w-1/2 p-2'>
          <CodeEditor
            code={code}
            onChange={setCode}
            theme={xcodeDark}
            language={[javascript()]}
          />
        </div>
        <div className='w-1/2 p-2'>
          <ResultView output={output} />
        </div>
      </div>
    </div>
    
  );
}

export default Page;