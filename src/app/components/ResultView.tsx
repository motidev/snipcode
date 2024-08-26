import { FC } from 'react';

interface ResultViewProps {
    output: string;
}

const ResultView: FC<ResultViewProps> = ({ output }) => {
    return (
        <div>
            <h1 className='font-bold'>Result</h1>
            <pre className='font-normal text-sm text-gray-500'>{output}</pre>
        </div>
    );
}

export default ResultView;
