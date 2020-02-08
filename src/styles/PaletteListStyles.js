import sizes from './sizes';
import bg from './bg.svg';

export default {
    root:{
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        /* background by SVGBackgrounds.com */
        backgroundColor: '#ff7700',
        backgroundImage: `url(${bg})`,
        overflow: 'scroll'
    },
    title:{
        fontSize: '2rem'
    },
    container:{
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [sizes.down('xl')]:{
            width: '80%'
        }
    },
    nav:{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems:'center',
        '& a':{
            color: 'white',
            textDecoration: 'none'
        }
    },
    palettes:{
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '2rem',
        [sizes.down('md')]:{
            gridTemplateColumns: 'repeat(2, 50%)'
        },
        [sizes.down('xs')]:{
            gridTemplateColumns: 'repeat(1, 100%)'
        }
    }
};
