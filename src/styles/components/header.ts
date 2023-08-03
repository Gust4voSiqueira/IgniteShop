import { styled } from '..'

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  div: {
    position: 'relative',

    button: {
      backgroundColor: '$gray800',
      width: 50,
      height: 50,
      border: 0,
      borderRadius: 8,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '$gray850',
      },
    },

    span: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      position: 'absolute',
      top: -10,
      right: -5,

      height: 25,
      width: 25,
      marginBottom: 1,
      marginLeft: 1,
      borderRadius: '50%',

      backgroundColor: '$green500',
      color: '$white',
      fontWeight: 'bold',
    },
  },
})
