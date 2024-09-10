import Image from 'next/image';
import Link from 'next/link';

function HomePage() {
  return (
    <div className='ml-16'>
      <div className='mt-2'>
        <Link className="bg-red-900 text-red-500 bg-opacity-30 p-1 rounded-md text-xs" href='https://github.com/motidev/snipcode'>Snipcode Github 💭</Link>
      </div>
      <div>
        <h1 className='font-extrabold select-none text-4xl mt-7'>Test your <span className='bg-red-900 text-red-700 bg-opacity-15 p-2 rounded-lg'>code</span> easily</h1>
        <div className='text-sm mt-7 text-white text-opacity-50'>
            <p>Snipcode is a cutting-edge web app for coding, learning, and experimenting.</p>
            <p>Run and debug code instantly, all from your browser.</p>
            <p>Supports multiple languages with no installations needed.</p>
            <p>Plus, it's your personal library for storing and sharing code snippets.</p>
        </div>
        <div className='mt-10'>
          <Link className="bg-red-900 text-red-500 hover:bg-red-800 hover:text-white bg-opacity-30 p-1 rounded-md text-base" href='https://snipcode.motidev.com/codeeditor'>Click here to test your code 💻</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage