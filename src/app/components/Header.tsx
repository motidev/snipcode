import Image from "next/image";

const Header = () => {
    return (
        <nav>
            <div className='flex items-center'>
                <Image src="/snipcode.svg" width={100} height={100} alt=''></Image>
                <h1 className='text-2xl font-extrabold text-white'>NIPCODE</h1>
            </div>
        </nav>
    );
}

export default Header;
