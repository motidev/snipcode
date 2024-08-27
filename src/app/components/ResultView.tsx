import { FC } from 'react';

interface ResultViewProps {
    output: string;
}

const ResultView: FC<ResultViewProps> = ({ output }) => {
    return (
        <div>
            <h1 className='font-bold mt-1'>Result</h1>
            <pre className='font-normal text-sm text-gray-200 opacity-80'>{output}</pre>
        </div>
    );
}

export default ResultView;
