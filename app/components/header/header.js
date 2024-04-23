import Image from 'next/image';
import styles from './header.module.scss';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__blur}></div>
                <div className='container'>
                    <div className={styles.header__wrapper}>
                        <h1>
                            <a href='#'>BruhMDB</a>
                        </h1>
                        <div style={{ display: 'flex' }}>
                            <button className={styles.header__btn}>
                                <Image
                                    src='/search-icon.svg'
                                    width={24}
                                    height={24}
                                    alt='search-icon'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
