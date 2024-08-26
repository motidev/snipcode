"use client";
import { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor';
import { copilot } from '@uiw/codemirror-theme-copilot';
import { javascript } from '@codemirror/lang-javascript';
import runjavascript from './runner/Javascript';
import ResultView from './components/ResultView';
import Image from 'next/image';

function HomePage() {
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
      <Image className='m-auto'src="./snipcode.svg" width={200} height={200} alt=''></Image>
      <div className='flex p-7'>
        <div className='w-1/2 p-2'>
          <CodeEditor
            code={code}
            onChange={setCode}
            theme={copilot}
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

export default HomePage;