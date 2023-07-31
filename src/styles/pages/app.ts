import { styled } from '..'

import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

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

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  backgroundColor: '#00000075',
})

export const Content = styled(Dialog.Content, {
  width: '35vw',
  height: '100vh',
  backgroundColor: '$gray800',

  position: 'fixed',
  top: 0,
  right: 0,

  padding: 50,
  paddingTop: 80,
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 30,
  right: 30,

  backgroundColor: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',
})
